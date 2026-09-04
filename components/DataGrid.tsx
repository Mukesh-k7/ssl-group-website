"use client";

import React, { useMemo, useState, useCallback } from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                             */
/* ------------------------------------------------------------------ */

export interface ColumnDef<T> {
  key: keyof T;
  label: string;
  filterable?: boolean;
  sortable?: boolean;
  width?: string;
  render?: (row: T) => React.ReactNode;
}

export type ExportFormat = "csv" | "json" | "txt" | "sql";

export interface DataGridProps<T extends Record<string, any>> {
  data: T[];
  columns: ColumnDef<T>[];
  idKey: keyof T;
  title?: string;
  tableName?: string; // used for SQL export
  pageSizeOptions?: number[];
  expandable?: boolean;
  renderExpanded?: (row: T) => React.ReactNode;
  onAdd?: () => void;
  onEdit?: (row: T) => void;
  onDelete?: (rows: T[]) => void;
  onUpdate?: (rows: T[]) => void;
}

type SortDir = "asc" | "desc" | null;

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function downloadFile(content: string, filename: string, mime: string) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function toCSV<T extends Record<string, any>>(rows: T[], columns: ColumnDef<T>[]) {
  const header = columns.map((c) => `"${c.label}"`).join(",");
  const body = rows
    .map((r) =>
      columns
        .map((c) => `"${String(r[c.key] ?? "").replace(/"/g, '""')}"`)
        .join(",")
    )
    .join("\n");
  return `${header}\n${body}`;
}

function toTXT<T extends Record<string, any>>(rows: T[], columns: ColumnDef<T>[]) {
  const header = columns.map((c) => c.label).join("\t");
  const body = rows
    .map((r) => columns.map((c) => String(r[c.key] ?? "")).join("\t"))
    .join("\n");
  return `${header}\n${body}`;
}

function toSQL<T extends Record<string, any>>(
  rows: T[],
  columns: ColumnDef<T>[],
  tableName: string
) {
  const cols = columns.map((c) => String(c.key)).join(", ");
  return rows
    .map((r) => {
      const vals = columns
        .map((c) => {
          const v = r[c.key];
          return typeof v === "number" ? v : `'${String(v ?? "").replace(/'/g, "''")}'`;
        })
        .join(", ");
      return `INSERT INTO ${tableName} (${cols}) VALUES (${vals});`;
    })
    .join("\n");
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function DataGrid<T extends Record<string, any>>({
  data,
  columns,
  idKey,
  title,
  tableName = "table_data",
  pageSizeOptions = [10, 25, 50, 100],
  expandable = true,
  renderExpanded,
  onAdd,
  onEdit,
  onDelete,
  onUpdate,
}: DataGridProps<T>) {
  const [search, setSearch] = useState("");
  const [colFilters, setColFilters] = useState<Record<string, string>>({});
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(pageSizeOptions[0]);
  const [selected, setSelected] = useState<Set<any>>(new Set());
  const [expandedRows, setExpandedRows] = useState<Set<any>>(new Set());
  const [exportOpen, setExportOpen] = useState(false);

  /* ---- filtering ---- */
  const filtered = useMemo(() => {
    let rows = [...data];

    if (search.trim()) {
      const q = search.toLowerCase();
      rows = rows.filter((r) =>
        columns.some((c) => String(r[c.key] ?? "").toLowerCase().includes(q))
      );
    }

    Object.entries(colFilters).forEach(([key, val]) => {
      if (!val) return;
      rows = rows.filter((r) =>
        String(r[key] ?? "").toLowerCase().includes(val.toLowerCase())
      );
    });

    if (sortKey && sortDir) {
      rows.sort((a, b) => {
        const av = a[sortKey];
        const bv = b[sortKey];
        if (av === bv) return 0;
        const cmp = av > bv ? 1 : -1;
        return sortDir === "asc" ? cmp : -cmp;
      });
    }

    return rows;
  }, [data, search, colFilters, sortKey, sortDir, columns]);

  /* ---- pagination ---- */
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageRows = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  /* ---- handlers ---- */
  const toggleSort = useCallback(
    (key: keyof T) => {
      if (sortKey !== key) {
        setSortKey(key);
        setSortDir("asc");
      } else if (sortDir === "asc") {
        setSortDir("desc");
      } else {
        setSortKey(null);
        setSortDir(null);
      }
    },
    [sortKey, sortDir]
  );

  const toggleRowSelect = (id: any) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleExpand = (id: any) => {
    setExpandedRows((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const selectedRows = data.filter((r) => selected.has(r[idKey]));

  const handleExport = (fmt: ExportFormat) => {
    const rows = filtered;
    if (fmt === "csv") downloadFile(toCSV(rows, columns), `${tableName}.csv`, "text/csv");
    if (fmt === "json")
      downloadFile(JSON.stringify(rows, null, 2), `${tableName}.json`, "application/json");
    if (fmt === "txt") downloadFile(toTXT(rows, columns), `${tableName}.txt`, "text/plain");
    if (fmt === "sql")
      downloadFile(toSQL(rows, columns, tableName), `${tableName}.sql`, "text/plain");
    setExportOpen(false);
  };

  const handlePrint = () => {
    const win = window.open("", "_blank");
    if (!win) return;
    const headerHtml = columns.map((c) => `<th>${c.label}</th>`).join("");
    const rowsHtml = filtered
      .map(
        (r) =>
          `<tr>${columns
            .map((c) => `<td>${String(r[c.key] ?? "")}</td>`)
            .join("")}</tr>`
      )
      .join("");
    win.document.write(`
      <html><head><title>${title ?? tableName}</title>
      <style>
        body{font-family:sans-serif;padding:24px;color:#111}
        table{width:100%;border-collapse:collapse}
        th,td{border:1px solid #ccc;padding:8px;text-align:left;font-size:12px}
        th{background:#f3f4f6}
      </style></head>
      <body>
        <h2>${title ?? tableName}</h2>
        <table><thead><tr>${headerHtml}</tr></thead><tbody>${rowsHtml}</tbody></table>
        <script>window.onload = () => window.print();</script>
      </body></html>
    `);
    win.document.close();
  };

  /* ---- render ---- */
  return (
    <div className="w-full rounded-lg border border-white/10 bg-[#0B111C] text-slate-200 shadow-xl">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <div className="flex flex-wrap items-center gap-2">
          {title && <h3 className="mr-3 text-sm font-semibold text-slate-100">{title}</h3>}

          <ToolbarButton label="Add" onClick={onAdd} disabled={!onAdd} />
          <ToolbarButton
            label="Edit"
            onClick={() => selectedRows[0] && onEdit?.(selectedRows[0])}
            disabled={!onEdit || selectedRows.length !== 1}
          />
          <ToolbarButton
            label="Delete"
            onClick={() => onDelete?.(selectedRows)}
            disabled={!onDelete || selectedRows.length === 0}
          />
          <ToolbarButton
            label="Update"
            onClick={() => onUpdate?.(selectedRows)}
            disabled={!onUpdate || selectedRows.length === 0}
          />
          <ToolbarButton label="Cancel" onClick={() => setSelected(new Set())} />
          <ToolbarButton label="Print" onClick={handlePrint} />
        </div>

        <div className="flex items-center gap-2">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="Search..."
            className="w-48 rounded-md border border-white/10 bg-[#0F1626] px-3 py-1.5 text-sm text-slate-200 placeholder:text-slate-500 focus:border-[#F97316] focus:outline-none"
          />

          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setPage(1);
            }}
            className="rounded-md border border-white/10 bg-[#0F1626] px-2 py-1.5 text-sm text-slate-200 focus:border-[#F97316] focus:outline-none"
          >
            {pageSizeOptions.map((n) => (
              <option key={n} value={n}>
                {n} / page
              </option>
            ))}
          </select>

          <div className="relative">
            <button
              onClick={() => setExportOpen((v) => !v)}
              className="rounded-md border border-[#F97316]/40 bg-[#F97316]/10 px-3 py-1.5 text-sm font-medium text-[#F97316] hover:bg-[#F97316]/20"
            >
              Export as ▾
            </button>
            {exportOpen && (
              <div className="absolute right-0 z-10 mt-1 w-36 overflow-hidden rounded-md border border-white/10 bg-[#0F1626] shadow-lg">
                {(["csv", "json", "txt", "sql"] as ExportFormat[]).map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => handleExport(fmt)}
                    className="block w-full px-3 py-2 text-left text-sm text-slate-200 hover:bg-white/5"
                  >
                    Export {fmt.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/2">
              {expandable && <th className="w-8 px-3 py-2" />}
              <th className="w-8 px-3 py-2" />
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  className="px-3 py-2 text-left font-semibold text-slate-300"
                  style={{ width: col.width }}
                >
                  <button
                    onClick={() => col.sortable !== false && toggleSort(col.key)}
                    className="flex items-center gap-1 hover:text-[#EAB308]"
                  >
                    {col.label}
                    {sortKey === col.key && (sortDir === "asc" ? "▲" : "▼")}
                  </button>
                  {col.filterable !== false && (
                    <input
                      value={colFilters[String(col.key)] ?? ""}
                      onChange={(e) => {
                        setColFilters((p) => ({ ...p, [String(col.key)]: e.target.value }));
                        setPage(1);
                      }}
                      placeholder="Filter"
                      className="mt-1 w-full rounded border border-white/10 bg-[#0F1626] px-2 py-1 text-xs text-slate-300 placeholder:text-slate-600 focus:border-[#F97316] focus:outline-none"
                    />
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageRows.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length + (expandable ? 2 : 1)}
                  className="px-3 py-8 text-center text-slate-500"
                >
                  No records found
                </td>
              </tr>
            )}
            {pageRows.map((row) => {
              const id = row[idKey];
              const isExpanded = expandedRows.has(id);
              return (
                <React.Fragment key={String(id)}>
                  <tr className="border-b border-white/5 hover:bg-white/3">
                    {expandable && (
                      <td className="px-3 py-2">
                        <button
                          onClick={() => toggleExpand(id)}
                          className="text-slate-400 hover:text-[#F97316]"
                        >
                          {isExpanded ? "▾" : "▸"}
                        </button>
                      </td>
                    )}
                    <td className="px-3 py-2">
                      <input
                        type="checkbox"
                        checked={selected.has(id)}
                        onChange={() => toggleRowSelect(id)}
                        className="accent-[#F97316]"
                      />
                    </td>
                    {columns.map((col) => (
                      <td key={String(col.key)} className="px-3 py-2 text-slate-200">
                        {col.render ? col.render(row) : String(row[col.key] ?? "")}
                      </td>
                    ))}
                  </tr>
                  {expandable && isExpanded && (
                    <tr className="bg-white/2">
                      <td colSpan={columns.length + 2} className="px-6 py-3">
                        {renderExpanded ? renderExpanded(row) : null}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between border-t border-white/10 px-4 py-3 text-sm text-slate-400">
        <span>
          Showing {filtered.length === 0 ? 0 : (page - 1) * pageSize + 1}–
          {Math.min(page * pageSize, filtered.length)} of {filtered.length} entries
        </span>
        <div className="flex items-center gap-1">
          <PageButton label="«" onClick={() => setPage(1)} disabled={page === 1} />
          <PageButton
            label="‹"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          />
          <span className="px-2">
            {page} / {totalPages}
          </span>
          <PageButton
            label="›"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          />
          <PageButton
            label="»"
            onClick={() => setPage(totalPages)}
            disabled={page === totalPages}
          />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Small UI helpers                                                   */
/* ------------------------------------------------------------------ */

function ToolbarButton({
  label,
  onClick,
  disabled,
}: {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="rounded-md border border-white/10 bg-white/3 px-3 py-1.5 text-sm text-slate-200 transition hover:border-[#F97316]/50 hover:text-[#F97316] disabled:cursor-not-allowed disabled:opacity-40"
    >
      {label}
    </button>
  );
}

function PageButton({
  label,
  onClick,
  disabled,
}: {
  label: string;
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="rounded border border-white/10 px-2 py-1 hover:border-[#F97316]/50 hover:text-[#F97316] disabled:cursor-not-allowed disabled:opacity-30"
    >
      {label}
    </button>
  );
}
