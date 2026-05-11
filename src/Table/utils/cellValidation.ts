import { ColumnDefinition, ParsedCellValue } from "../types/TableTypes";

export type CellCommitResult =
  | { ok: true; value: ParsedCellValue }
  | { ok: false; error: string };

export function validateCellValue(
  column: ColumnDefinition,
  draftValue: unknown,
): CellCommitResult {
  let parsed: ParsedCellValue;

  switch (column.type) {
    case "string": {
      parsed = String(draftValue ?? "").trim();
      if (!parsed) return { ok: false, error: "Value is required" };
      break;
    }
    case "number": {
      const num = Number(draftValue );
      if (!Number.isFinite(num)) {
        return { ok: false, error: "Enter a valid number" };
      }
      parsed = num;
      break;
    }
    case "boolean": {
      if (typeof draftValue !== "boolean") {
        return { ok: false, error: "Invalid value" };
      }
      parsed = draftValue;
      break;
    }
    case "select": {
      const value = String(draftValue ?? "");
      if (!column.options?.length) {
        return { ok: false, error: "No options configured" };
      }
      if (!column.options.includes(value)) {
        return { ok: false, error: "Choose a valid option" };
      }
      parsed = value;
      break;
    }
    default: {
      return { ok: false, error: "Unsupported column type" };
    }
  }

  const message = column.validate?.(parsed) ?? null;
  if (message) return { ok: false, error: message };

  return { ok: true, value: parsed };
}
