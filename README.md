# Cemento Client-Side Assignment

React + TypeScript project that renders an editable data table with dynamic columns and generated mock data.

## Tech Stack

- React
- TypeScript (strict mode)
- Create React App (`react-scripts`)
- Faker (`@faker-js/faker`) for local mock data

## What This Project Includes

- Editable table cells with per-type inputs (`string`, `number`, `boolean`, `select`)
- Cell-level validation support through column definitions
- Column visibility toggling via a column selector
- Large generated dataset (1000 rows) for UI behavior testing

## Project Structure

```text
src/
  App.tsx
  index.tsx
  styles.css
  Table/
    Table.tsx
    components/
      ColumnSelector.tsx
      TableCell.tsx
      TableColumn.tsx
      TableRow.tsx
    hooks/
      useEditableCell.ts
      useTableData.ts
    layouts/
      TableBody.tsx
      TableHeader.tsx
    types/
      TableTypes.ts
    utils/
      mockData.ts
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm 9+ (recommended)

### Installation

```bash
npm install
```

### Run in Development

```bash
npm start
```

App runs on [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
```

### Run Tests

```bash
npm test
```

## Available Scripts

- `npm start` - starts the development server
- `npm run build` - creates an optimized production build
- `npm test` - runs tests in watch mode
- `npm run eject` - ejects CRA config (irreversible)

## Data Model Overview

Column and row behavior is driven by `Table/types/TableTypes.ts` and `Table/utils/mockData.ts`.

Each column can define:

- field `id` and `title`
- visual order with `ordinalNo`
- value `type`
- optional `options` (for select columns)
- optional `validate` function for cell validation

## Notes

- The current app entry uses mock data from `Table/utils/mockData.ts`.
- Styling is centralized in `src/styles.css`.

## License

This repository is provided for assignment/evaluation purposes.