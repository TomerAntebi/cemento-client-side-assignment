import { useState, useEffect } from "react";
import { ColumnDefinition } from "../types/TableTypes";

export default function useEditableCell(
  value: any,
  column: ColumnDefinition,
  onChange: (val: any) => void
) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setTempValue(value);
    setError(null);
  }, [value]);

  const validate = (val: any) => {
    if (!column.validate) return null;
    return column.validate(val);
  };

  const startEdit = () => setIsEditing(true);

  const save = () => {
    const validationError = validate(tempValue);

    if (validationError) {
      setError(validationError);
      return;
    }

    onChange(tempValue);
    setIsEditing(false);
    setError(null);
  };

  const discard = () => {
    setTempValue(value);
    setError(null);
    setIsEditing(false);
  };

  const handleChange = (val: any) => {
    setTempValue(val);
  };

  return {
    isEditing,
    error,
    startEdit,
    save,
    discard,
    tempValue,
    handleChange,
  };
}
