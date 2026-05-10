import { ColumnDefinition } from "../types/TableTypes";

export type ColumnSelectorProps = {
  columns: ColumnDefinition[];
  visibleColumns: ColumnDefinition[];
  onToggleColumn: (column: ColumnDefinition) => void;
};

export default function ColumnSelector({
  columns,
  visibleColumns,
  onToggleColumn,
}: ColumnSelectorProps) {
  return (
    <>
      <label>Columns Filter:</label>
      <div className="column-selector">
        {columns.map((col) => (
          <label key={col.id}>
            <input
              type="checkbox"
              checked={visibleColumns.some((visibleCol) => visibleCol.id === col.id)}
              onChange={() => onToggleColumn(col)}
            />
            <span>{col.title}</span>
          </label>
        ))}
      </div>
    </>
  );
}
