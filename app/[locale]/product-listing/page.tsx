"use client";

import DataGrid, { ColumnDef } from "@/components/DataGrid";

interface Employee {
  employeeId: number;
  name: string;
  title: string;
  city: string;
  reports?: string[];
}

const employees: Employee[] = [
  { employeeId: 6, name: "Mukesh", title: "Sales Manager", city: "New York", reports: ["Nancy", "Andrew"] },
  { employeeId: 1, name: "Nancy", title: "Sales Representative", city: "Seattle" },
  { employeeId: 2, name: "Andrew", title: "Vice President, Sales", city: "Tacoma" },
  { employeeId: 3, name: "Janet", title: "Sales Representative", city: "Kirkland" },
  { employeeId: 4, name: "Margaret", title: "Sales Representative", city: "Redmond" },
  { employeeId: 5, name: "Steven", title: "Sales Manager", city: "London" },
];

const columns: ColumnDef<Employee>[] = [
  { key: "employeeId", label: "Employee ID", width: "120px" },
  { key: "name", label: "Name" },
  { key: "title", label: "Title" },
  { key: "city", label: "City" },
];

export default function EmployeeGridPage() {
  return (
    <div className="min-h-screen bg-[#080C14] p-8">
      <DataGrid<Employee>
        data={employees}
        columns={columns}
        idKey="employeeId"
        title="Employees"
        tableName="employees"
        expandable
        renderExpanded={(row) => (
          <div className="text-sm text-slate-400">
            {row.reports?.length ? `Reports to: ${row.reports.join(", ")}` : "No direct reports"}
          </div>
        )}
        onAdd={() => console.log("add")}
        onEdit={(row) => console.log("edit", row)}
        onDelete={(rows) => console.log("delete", rows)}
        onUpdate={(rows) => console.log("update", rows)}
      />
    </div>
  );
}
