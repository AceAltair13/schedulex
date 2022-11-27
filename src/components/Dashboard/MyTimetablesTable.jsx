import { Button, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const MyTimetablesTable = () => {
  const history = useHistory();
  const { timetables } = useSelector((state) => state.timetable);
  const rows = timetables.map((timetable, index) => ({
    id: index,
    srNo: index + 1,
    timestamp: timetable.timestamp.toLocaleString(),
    cost: timetable.cost,
  }));
  const columns = [
    {
      field: "srNo",
      headerName: "Sr No",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "timestamp",
      headerName: "Created On",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "cost",
      headerName: "Cost of Timetable",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      headerName: "Actions",
      field: "actions",
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => {
            history.push("/view/" + params.row.id);
          }}
        >
          View
        </Button>
      ),
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
  ];
  return (
    <Stack spacing={2}>
      <Typography variant="h6" gutterBottom>
        My Timetables
      </Typography>
      <DataGrid columns={columns} rows={rows} autoHeight />
    </Stack>
  );
};

export default MyTimetablesTable;
