import { useState, useEffect } from "react";
import { ColumnDefinition } from "../types/TableTypes";
import { validateCellValue } from "../utils/cellValidation";

export default function useEditableCell(
  value: any,
  column: ColumnDefinition,
  onChange: (val: any) => void,
) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setTempValue(value);
    setError(null);
  }, [value]);

  const startEdit = () => setIsEditing(true);

  const saveChanges = () => {
    const result = validateCellValue(column, tempValue);

    if (!result.ok) {
      setError(result.error);
      return;
    }

    onChange(result.value);
    setIsEditing(false);
    setError(null);
  };

  const discardChanges = () => {
    setTempValue(value);
    setError(null);
    setIsEditing(false);
  };

  const handleChange = (val: any) => {
    setTempValue(val);
    setError(null);
  };

  return {
    isEditing,
    error,
    startEdit,
    saveChanges,
    discardChanges,
    tempValue,
    handleChange,
  };
}
