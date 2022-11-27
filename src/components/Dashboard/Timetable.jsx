import React from "react";
import { Grid, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import _ from "lodash";

const Timetable = ({ classroom, timetable, workingDays }) => {
  const dayColumns = workingDays.map((day, i) => {
    return {
      field: day.day,
      headerName: day.day,
      minWidth: 100,
      flex: 1,
      align: "center",
      headerAlign: "center",
    };
  });
  const columns = [
    {
      field: "slot",
      headerName: "Slot",
      width: 75,
      align: "center",
      headerAlign: "center",
    },
    ...dayColumns,
  ];
  let transpose = _.zip(...timetable);
  // console.log("===", transpose);
  const rows = transpose.map((row, i) => {
    let rowData = {};
    row.forEach((cell, j) => {
      rowData[workingDays[j].day] = cell
        ? `${cell.subject} - ${cell.teacher}`
        : "";
    });
    return { id: i, ...rowData, slot: i + 1 };
  });

  return (
    <Grid container spacing={2} flexGrow={1} mb={3}>
      <Grid item xs={12} textAlign="center">
        <Typography variant="h4" gutterBottom>
          {classroom}
        </Typography>
      </Grid>
      <Grid item xs={12} mb={3}>
        <DataGrid
          autoHeight
          rows={rows}
          columns={columns}
          disableSelectionOnClick
          hideFooter
        />
      </Grid>
    </Grid>
  );
};

export default Timetable;
