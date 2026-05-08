import { ColumnDefinition } from "../types/TableTypes";
import TableColumn from "../components/TableColum";

type TableHeaderProps = {
  columns: ColumnDefinition[];
};

export default function TableHeader({ columns }: TableHeaderProps) {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <TableColumn key={column.id} column={column} />
        ))}
      </tr>
    </thead>
  );
}
