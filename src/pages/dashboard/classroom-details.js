import {
  Stack,
  Typography,
  Button,
  Fab,
  TextField,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { AddRounded, Class } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import DashboardLayout from "../../layouts/DashboardLayout";
import CustomToolbar from "../../components/Dashboard/CustomToolbar";
import { useDispatch, useSelector } from "react-redux";
import { setClassroom } from "../../features/classroomSlice";

const columns = [
  {
    field: "srNo",
    headerName: "Sr No",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "classroomCode",
    headerName: "Classroom code",
    headerAlign: "center",
    align: "center",
    flex: 1,
  },
];

const ClassroomDetails = () => {
  const dispatch = useDispatch();
  const { classrooms } = useSelector((state) => state.classroom);
  const [classroomCode, setClassroomCode] = useState("");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const rows = classrooms.map((classroom, index) => ({
    id: classroom,
    srNo: index + 1,
    classroomCode: classroom,
  }));

  const addClassroom = () => {
    dispatch(setClassroom(classroomCode));
    setClassroomCode("");
  };

  return (
    <DashboardLayout title="Classrooms">
      <Stack direction="column" spacing={2}>
        <Typography variant="h6" gutterBottom>
          Add Classrooms
        </Typography>
        <Stack
          direction={matches ? "row" : "column"}
          spacing={2}
          alignItems="center"
        >
          <TextField
            label="Enter Classroom Code"
            icon={Class}
            fullWidth
            value={classroomCode}
            onChange={(e) => setClassroomCode(e.target.value)}
          />
          {matches ? (
            <Box>
              <Fab color="primary" onClick={addClassroom}>
                <AddRounded />
              </Fab>
            </Box>
          ) : (
            <Button
              variant="contained"
              sx={{ py: 2, px: 2 }}
              size="medium"
              startIcon={<AddRounded color="primary.main" />}
              fullWidth
              onClick={addClassroom}
            >
              Add
            </Button>
          )}
        </Stack>
        <Box />
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          autoHeight
          // TODO: Add delete button
          // components={{ Toolbar: CustomToolbar }}
        />
      </Stack>
    </DashboardLayout>
  );
};

export default ClassroomDetails;
