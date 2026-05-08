import { ColumnDefinition } from "../types/TableTypes";
import TableColumn from "../components/TableColumn";

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
