"use client";

import DataGrid, { ColumnDef } from "@/components/DataGrid";
import { useState } from "react";

interface Employee {
  employeeId: number;
  name: string;
  title: string;
  city: string;
  reports?: string[];
}

const initialEmployees: Employee[] = [
  { employeeId: 1, name: "Nancy", title: "Sales Representative", city: "Seattle" },
  { employeeId: 2, name: "Andrew", title: "Vice President, Sales", city: "Tacoma" },
  { employeeId: 3, name: "Janet", title: "Sales Representative", city: "Kirkland" },
  { employeeId: 4, name: "Margaret", title: "Sales Representative", city: "Redmond" },
  { employeeId: 5, name: "Steven", title: "Sales Manager", city: "London" },
  { employeeId: 6, name: "Mukesh", title: "Sales Manager", city: "New York" },
];

const columns: ColumnDef<Employee>[] = [
  { key: "employeeId", label: "Employee ID", width: "120px" },
  { key: "name", label: "Name" },
  { key: "title", label: "Title" },
  { key: "city", label: "City" },
];

export default function EmployeeGridPage() {
  const [employees, setEmployees] = useState(initialEmployees);

  const handleAdd = () => {
  const employeeId = Number(prompt("Employee ID"));
  if (!employeeId) return;

  const name = prompt("Employee Name");
  if (!name) return;

  const title = prompt("Employee Title");
  if (!title) return;

  const city = prompt("Employee City");
  if (!city) return;

  const reportsInput = prompt(
    "Reports (comma separated)\nExample: Nancy, Andrew"
  );

  const reports = reportsInput
    ? reportsInput.split(",").map((r) => r.trim())
    : [];

  setEmployees((prev) => [
    ...prev,
    {
      employeeId,
      name,
      title,
      city,
      reports,
    },
  ]);
};

  const handleEdit = (row: Employee) => {
    const name = prompt("New Name", row.name);

    if (!name) return;

    setEmployees((prev) =>
      prev.map((emp) =>
        emp.employeeId === row.employeeId
          ? { ...emp, name }
          : emp
      )
    );
  };

  const handleDelete = (rows: Employee[]) => {
    if (!confirm("Delete selected employees?")) return;

    setEmployees((prev) =>
      prev.filter(
        (emp) =>
          !rows.some((r) => r.employeeId === emp.employeeId)
      )
    );
  };

  const handleUpdate = (rows: Employee[]) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        rows.some((r) => r.employeeId === emp.employeeId)
          ? {
            ...emp,
            title: "Updated Title",
          }
          : emp
      )
    );
  };


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
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </div>
  );
}
