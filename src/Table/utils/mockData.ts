import { faker } from "@faker-js/faker";
import {
  ColumnDefinition,
  ParsedCellValue,
  TableDataType,
} from "../types/TableTypes";

export const columns: ColumnDefinition[] = [
  {
    id: "name",
    ordinalNo: 0,
    title: "Name",
    type: "string",
    validate: (val: ParsedCellValue) =>
      typeof val === "string" && val.length < 2 ? "Name too short" : null,
  },
  {
    id: "age",
    ordinalNo: 1,
    title: "Age",
    type: "number",
    validate: (val: ParsedCellValue) =>
      typeof val === "number" && val < 18 ? "Must be at least 18" : null,
  },
  { id: "active", ordinalNo: 2, title: "Active", type: "boolean" },
  {
    id: "role",
    ordinalNo: 3,
    title: "Role",
    type: "select",
    options: ["Admin", "User", "Guest"],
  },
];

const ROLES = ["Admin", "User", "Guest"] as const;

export const generateData = (count: number) => {
  return Array.from({ length: count }).map(() => ({
    id: faker.string.uuid(),
    name: faker.person.firstName(),
    age: faker.number.int({ min: 18, max: 60 }),
    active: faker.datatype.boolean(),
    role: ROLES[faker.number.int({ min: 0, max: ROLES.length - 1 })],
  }));
};

export const tableData: TableDataType = {
  columns,
  data: generateData(1000),
};
