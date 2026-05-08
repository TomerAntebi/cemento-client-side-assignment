import { ColumnDefinition } from "../types/TableTypes";

export type ColumnSelectorProps = {
  columns: ColumnDefinition[];
  onToggleColumn: (column: ColumnDefinition) => void;
};

export default function ColumnSelector({
  columns,
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
              checked={col.toggled}
              onChange={() => onToggleColumn(col)}
            />
            <span>{col.title}</span>
          </label>
        ))}
      </div>
    </>
  );
}
