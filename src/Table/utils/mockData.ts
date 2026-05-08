import { faker } from "@faker-js/faker";
import { ColumnDefinition, TableDataType } from "../types/TableTypes";

export const columns: ColumnDefinition[] = [
  {
    id: "name",
    ordinalNo: 0,
    title: "Name",
    type: "string",
    validate: (val: any) => (!val || val.length < 2 ? "Name too short" : null),
  },
  {
    id: "age",
    ordinalNo: 1,
    title: "Age",
    type: "number",
    validate: (val: any) => (val < 18 ? "Must be at least 18" : null),
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

export const generateData = (count: number) => {
  return Array.from({ length: count }).map(() => ({
    id: faker.string.uuid(),
    name: faker.person.firstName(),
    age: faker.number.int({ min: 18, max: 60 }),
    active: faker.datatype.boolean(),
    role: faker.helpers.arrayElement(["Admin", "User", "Guest"]),
  }));
};

export const tableData: TableDataType = {
  columns,
  data: generateData(1000),
};
