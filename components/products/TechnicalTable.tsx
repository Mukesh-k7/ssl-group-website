interface Props {
  title: string;
  headers: string[];
  rows: string[][];
}

export default function TechnicalTable({
  title,
  headers,
  rows,
}: Props) {
  return (
    <div className="mt-10 overflow-hidden rounded-xl border p-2">

      <h2 className="bg-[linear-gradient(140deg,#f1edea_0%,#f3892d_40%,#E8820A_70%,#A84800_100%)] p-4 text-xl font-bold text-[#1e3a5f]">
        {title}
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full rounded-xl border">
          <thead className="">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="border p-3 text-left"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td
                    key={i}
                    className="border p-3"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}