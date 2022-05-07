import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "Game ID", width: 300, disableColumnFilter: true },
  { field: "slot", headerName: "Slot", sortable: false, width: 300 },
  { field: "time", headerName: "Time", width: 300, disableColumnMenu: false },
];

export default function Content({ result }) {
  return (
    <div style={{ height: window.innerHeight - 50, width: "100%" }}>
      <DataGrid
        rows={result}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        hideFooter={result.length > 10 ? false : true}
      />
    </div>
  );
}
