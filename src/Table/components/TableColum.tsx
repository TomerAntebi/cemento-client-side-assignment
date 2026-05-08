import { ColumnDefinition } from "../types/TableTypes";

export default function TableColumn({ column }: { column: ColumnDefinition }) {
  return <th style={{ width: column.width ?? "auto" }}>{column.title}</th>;
}
