import { TableRowData, ColumnDefinition } from "../types/TableTypes";
import TableCell from "./TableCell";

export type TableRowProps = {
  row: TableRowData;
  columns: ColumnDefinition[];
  onCellChange: (rowId: string, columnId: string, newValue: any) => void;
};

export default function TableRow({
  row,
  columns,
  onCellChange,
}: TableRowProps) {
  return (
    <tr>
      {columns.map((col) => (
        <td key={col.id}>
          <TableCell
            value={row[col.id]}
            column={col}
            onChange={(val) => onCellChange(row.id, col.id, val)}
          />
        </td>
      ))}
    </tr>
  );
}
