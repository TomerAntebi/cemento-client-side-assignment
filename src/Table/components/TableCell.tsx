import { ColumnDefinition, ColumnType } from "../types/TableTypes";
import useEditableCell from "../hooks/useEditableCell";

export type TableCellProps = {
  value: any;
  column: ColumnDefinition;
  onChange: (newValue: any) => void;
};

export default function TableCell({ value, column, onChange }: TableCellProps) {
  const {
    isEditing,
    error,
    startEdit,
    save,
    discard,
    tempValue,
    handleChange,
  } = useEditableCell(value, column, onChange);

  const CellInput = () => {
    switch (column.type) {
      case "string":
        return (
          <input
            value={tempValue}
            onChange={(e) => handleChange(e.target.value)}
            autoFocus
          />
        );
      case "number":
        return (
          <input
            value={tempValue}
            onChange={(e) => handleChange(e.target.value)}
            type="number"
            autoFocus
          />
        );

      case "boolean":
        return (
          <input
            type="checkbox"
            checked={tempValue}
            onChange={(e) => handleChange(e.target.checked)}
          />
        );

      case "select":
        return (
          <select
            value={tempValue}
            onChange={(e) => handleChange(e.target.value)}
            autoFocus
          >
            {column.options?.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        );

      default:
        return <span>{String(tempValue)}</span>;
    }
  };

  return (
    <div className="cell">
      {isEditing ? <CellInput /> : <span>{String(tempValue)}</span>}
      {!isEditing && <button onClick={startEdit}>Edit</button>}

      {isEditing && (
        <>
          <button onClick={save}>Save</button>
          <button onClick={discard}>Discard</button>
        </>
      )}

      {error && <div className="error">{error}</div>}
    </div>
  );
}
