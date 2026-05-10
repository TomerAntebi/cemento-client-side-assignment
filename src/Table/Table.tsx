import ColumnSelector from "./components/ColumnSelector";
import { TableDataType } from "./types/TableTypes";
import TableHeader from "./layouts/TableHeader";
import TableBody from "./layouts/TableBody";
import useTableData from "./hooks/useTableData";

export type TableProps = {
  data: TableDataType;
};

export default function Table({ data }: TableProps) {
  const { tableData, visibleColumns, updateCell, toggleColumn } =
    useTableData(data);

  return (
    <>
      <ColumnSelector
        columns={tableData.columns}
        visibleColumns={visibleColumns}
        onToggleColumn={toggleColumn}
      />
      {visibleColumns.length > 0 ? (
        <table>
          <TableHeader columns={visibleColumns} />

          <TableBody
            rows={tableData.data}
            columns={visibleColumns}
            onCellChange={updateCell}
          />
        </table>
      ) : (
        <div>No Columns Selected</div>
      )}
    </>
  );
}
