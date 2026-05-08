import "./styles.css";
import Table from "./Table/Table";
import { tableData } from "./Table/utils/mockData";

export default function App() {
  return (
    <div className="App">
      <Table data={tableData} />;
    </div>
  );
}
