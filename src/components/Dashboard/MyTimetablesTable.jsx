import { Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const columns = [
    {
        field: "srNo",
        headerName: "Sr No",
        flex: 1,
        headerAlign: "center",
        align: "center",
    },
    {
        field: "timetableName",
        headerName: "Timetable Name",
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
        field: "actions",
        headerName: "Actions",
        flex: 1,
        headerAlign: "center",
        align: "center",
    },
];
const rows = [];

const MyTimetablesTable = () => {
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
