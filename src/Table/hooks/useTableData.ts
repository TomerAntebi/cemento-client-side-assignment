import { useState } from "react";
import { TableDataType, ColumnType, ColumnDefinition } from "../types/TableTypes";

export default function useTableData(data: TableDataType) {
  const [tableData, setTableData] = useState(data);
  const [visibleColumns, setVisibleColumns] = useState(tableData.columns);

  const updateCell = (
    rowId: string,
    columnId: string,
    newValue: ColumnType
  ) => {
    setTableData((prev) => ({
      ...prev,
      data: prev.data.map((row) =>
        row.id === rowId ? { ...row, [columnId]: newValue } : row
      ),
    }));
  };

  const toggleColumn = (toggledColumn: ColumnDefinition) => {
    setVisibleColumns((prev) => {
      const exists = prev.some((col) => col.id === toggledColumn.id);

      if (exists) {
        return prev.filter((col) => col.id !== toggledColumn.id);
      }

      const newColumns = [...prev];
      newColumns.splice(toggledColumn.ordinalNo, 0, toggledColumn);

      return newColumns;
    });
  };

  return { tableData, visibleColumns, updateCell, toggleColumn };
}
