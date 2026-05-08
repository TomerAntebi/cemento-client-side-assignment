import { TableRowData, ColumnDefinition } from "../types/TableTypes";
import TableRow from "../components/TableRow";

export type TableBodyProps = {
  rows: TableRowData[];
  columns: ColumnDefinition[];
  onCellChange: (rowId: string, columnId: string, newValue: any) => void;
};

export default function TableBody({
  rows,
  columns,
  onCellChange,
}: TableBodyProps) {
  return (
    <tbody>
      {rows.map((row) => (
        <TableRow
          key={row.id}
          row={row}
          columns={columns}
          onCellChange={onCellChange}
        />
      ))}
    </tbody>
  );
}
