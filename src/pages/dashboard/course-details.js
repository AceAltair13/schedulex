import React, { useState } from "react";
import {
  Button,
  Stack,
  Typography,
  Fab,
  Box,
  useMediaQuery,
  useTheme,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { AddRounded } from "@mui/icons-material";
import DashboardLayout from "../../layouts/DashboardLayout";
import CustomToolbar from "../../components/Dashboard/CustomToolbar";
import { useDispatch, useSelector } from "react-redux";
import { setNewCourse } from "../../features/courseSlice";

const columns = [
  {
    field: "srNo",
    headerName: "Sr No",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "courseCode",
    headerName: "Course code",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "courseName",
    headerName: "Course Name",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
];

const CourseDetails = () => {
  const dispatch = useDispatch();
  const [course, setCourse] = useState({ courseCode: "", courseName: "" });
  const { courses } = useSelector((state) => state.course);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const rows = courses.map((course, i) => ({
    id: course.courseCode,
    srNo: i + 1,
    courseCode: course.courseCode,
    courseName: course.courseName,
  }));

  const addCourse = () => {
    dispatch(setNewCourse(course));
    setCourse({ courseCode: "", courseName: "" });
  };

  return (
    <DashboardLayout title="Courses">
      <Stack spacing={2} direction="column">
        <Typography variant="h6" gutterBottom>
          Add a new course
        </Typography>
        <Stack direction={matches ? "row" : "column"} spacing={2}>
          <TextField
            label="Course Code"
            fullWidth
            value={course.courseCode}
            onChange={(e) =>
              setCourse({ ...course, courseCode: e.target.value })
            }
          />
          <TextField
            label="Course Name"
            fullWidth
            value={course.courseName}
            onChange={(e) =>
              setCourse({ ...course, courseName: e.target.value })
            }
          />
          {matches ? (
            <Box>
              <Fab color="primary" onClick={addCourse}>
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
            >
              Add
            </Button>
          )}
        </Stack>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          // TODO: Add delete button
          // components={{ Toolbar: CustomToolbar }}
          autoHeight
        />
      </Stack>
    </DashboardLayout>
  );
};

export default CourseDetails;
