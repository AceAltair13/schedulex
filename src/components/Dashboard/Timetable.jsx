import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import _ from "lodash";
import { useSelector } from "react-redux";

const Timetable = ({ classroom, timetable }) => {
  const { workingDays } = useSelector((state) => state.institute);
  // const columns = workingDays.map((day, i) => {
  //   return {
  //     field: day.day,
  //     headerName: day.day,
  //     flex: 1,
  //     align: "center",
  //     headerAlign: "center",
  //   };
  // });
  // let transpose = _.zip(...timetable);
  // const rows = transpose.map((row, i) => {
  //   return {
  //     ...row,
  //     id: i,
  //   };
  // });

  return (
    <Grid container spacing={1} flexGrow={1}>
      <Grid item xs={12} textAlign="center">
        <Typography variant="h5">Class: {classroom}</Typography>
      </Grid>
      <Grid item xs={12} mb={3}>
        {/* <DataGrid
          autoHeight
          rows={rows}
          columns={columns}
          disableSelectionOnClick
        /> */}
        <Box sx={{ border: "1px solid", p: 3 }}>
          <Stack direction="row" justifyContent="space-around">
            {workingDays.map((day, i) => {
              return (
                <Box key={i}>
                  <Typography variant="h6">{day.day}</Typography>
                  <Stack spacing={2}>
                    {timetable[i].map((slot, j) => {
                      return (
                        <Box key={j}>
                          <Typography variant="body1">
                            {slot.subject} - {slot.teacher}
                          </Typography>
                        </Box>
                      );
                    })}
                  </Stack>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Timetable;
