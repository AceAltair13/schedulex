import React from "react";
import { Grid, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const Timetable = ({
  rows,
  columns,
  classroom,
  pageSize,
  rowsPerPageOptions,
}) => {
  return (
    <Grid container spacing={1} flexGrow={1}>
      <Grid item xs={12} textAlign="center">
        <Typography variant="h5">Class: {classroom}</Typography>
      </Grid>
      <Grid item xs={12}>
        <DataGrid
          autoHeight
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          rowsPerPageOptions={rowsPerPageOptions}
          disableSelectionOnClick
        />
      </Grid>
    </Grid>
  );
};

export default Timetable;
