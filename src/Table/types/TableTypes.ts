export type ColumnDefinition = {
  id: string;
  ordinalNo: number;
  title: string;
  type: ColumnType;
  width?: number;
  options?: string[];
  validate?: (value: any) => string | null;
};

export type ColumnType = "string" | "number" | "boolean" | "select";

export type TableRowData = {
  id: string;
  [columnId: string]: any;
};

export type TableDataType = {
  columns: ColumnDefinition[];
  data: TableRowData[];
};
