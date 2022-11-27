import React, { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import {
  TextField,
  Grid,
  Button,
  Box,
  Fab,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import CustomToolbar from "../../components/Dashboard/CustomToolbar";
import { DataGrid } from "@mui/x-data-grid";
import { AddRounded } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { setTeacher } from "../../features/teacherSlice";

const columns = [
  {
    field: "srNo",
    headerName: "Sr No",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "teacherCode",
    headerName: "Teacher Code",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "teacherName",
    headerName: "Teacher Name",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
];

const TeacherDetails = () => {
  const dispatch = useDispatch();
  const { teachers } = useSelector((state) => state.teacher);
  const [teacherDetails, setTeacherDetails] = useState({ name: "", code: "" });
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const rows = teachers.map((teacher, index) => ({
    id: index,
    srNo: index + 1,
    teacherCode: teacher.code,
    teacherName: teacher.name,
  }));

  const addTeacher = () => {
    dispatch(setTeacher(teacherDetails));
    setTeacherDetails({ name: "", code: "" });
  };

  return (
    <DashboardLayout title="Teachers">
      <Grid
        container
        spacing={2}
        sx={{
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom textAlign="start">
            Enter teacher details
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Teacher Code"
            variant="outlined"
            fullWidth
            value={teacherDetails.code}
            onChange={(e) =>
              setTeacherDetails({ ...teacherDetails, code: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <TextField
            label="Teacher Name"
            variant="outlined"
            fullWidth
            value={teacherDetails.name}
            onChange={(e) =>
              setTeacherDetails({ ...teacherDetails, name: e.target.value })
            }
          />
        </Grid>
        <Grid item md={1} xs={12} sx={{ textAlign: { xs: "center" } }}>
          {matches ? (
            <Fab
              color="primary"
              aria-label="add"
              type="submit"
              onClick={addTeacher}
            >
              <AddRounded />
            </Fab>
          ) : (
            <Button
              variant="contained"
              sx={{ py: 2, px: 2 }}
              size="medium"
              startIcon={<AddRounded color="primary" />}
              type="submit"
              fullWidth
              onClick={addTeacher}
            >
              Add
            </Button>
          )}
        </Grid>
      </Grid>
      <Box mt={3}>
        <DataGrid
          autoHeight
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          // TODO: Add delete button
          // components={{
          //   Toolbar: CustomToolbar,
          // }}
        />
      </Box>
    </DashboardLayout>
  );
};

export default TeacherDetails;
