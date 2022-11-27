import { useTheme } from "@emotion/react";
import {
  Button,
  Stack,
  TextField,
  useMediaQuery,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { DataGrid } from "@mui/x-data-grid";
import CustomToolbar from "../../components/Dashboard/CustomToolbar";
import AddTeacherModal from "../../components/Dashboard/modals/AddTeacherModal";
import { useDispatch, useSelector } from "react-redux";
import {
  setFacultyModalOpen,
  setSubject,
  setTempFaculty,
} from "../../features/subjectSlice";
import { appendSubject } from "../../features/courseSlice";

const SubjectDetails = () => {
  const { courses } = useSelector((state) => state.course);

  const columns = [
    {
      field: "srNo",
      headerName: "Sr No",
      width: 100,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "subjectCode",
      headerName: "Subject Code",
      width: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "subjectName",
      headerName: "Subject Name",
      minWidth: 200,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "slotsPerWeek",
      headerName: "Slots per week",
      minWidth: 200,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "selectCourse",
      headerName: "Selected Course",
      minWidth: 200,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
  ];

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [course, setCourse] = useState("");
  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };
  const dispatch = useDispatch();
  const { tempFaculty, subjects } = useSelector((state) => state.subject);
  const [subjectCode, setSubjectCode] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [slotsPerWeek, setSlotsPerWeek] = useState(0);
  const rows = subjects.map((subject, index) => {
    return {
      id: index + 1,
      srNo: index + 1,
      subjectCode: subject.subjectCode,
      subjectName: subject.subjectName,
      slotsPerWeek: subject.slotsPerWeek,
      selectCourse: subject.course,
    };
  });

  const appendSubjectToCourse = () => {
    dispatch(
      appendSubject({
        courseName: course.courseName,
        subject_name: subjectName,
        subject_code: subjectCode,
        total_slots: parseInt(slotsPerWeek),
        faculty: tempFaculty,
      })
    );
    dispatch(
      setSubject({
        subjectCode,
        subjectName,
        slotsPerWeek,
        course: course.courseName,
      })
    );
    dispatch(setTempFaculty([]));
  };

  return (
    <DashboardLayout title="Subjects">
      <Stack spacing={3}>
        <AddTeacherModal />
        <TextField
          label="Subject Code"
          fullWidth
          variant="outlined"
          value={subjectCode}
          onChange={(e) => {
            setSubjectCode(e.target.value);
          }}
        />
        <TextField
          label="Subject Name"
          fullWidth
          variant="outlined"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
        />
        <TextField
          label="Slots per week"
          fullWidth
          variant="outlined"
          type="number"
          value={slotsPerWeek}
          onChange={(e) => setSlotsPerWeek(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel>Select Course</InputLabel>
          <Select
            value={course}
            onChange={handleCourseChange}
            label="Select Course"
          >
            {courses.map((c) => (
              <MenuItem value={c} key={c}>
                {c.courseName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {tempFaculty.map((f) => (
          <Card key={f.teacher}>
            <CardContent>
              <Typography variant="h6" fontWeight="fontWeightBold">
                {f.teacher}
              </Typography>
              <Typography variant="body1">
                Classrooms: {f.classrooms.join()}
              </Typography>
              <Typography variant="body2">Slots Covered: {f.slots}</Typography>
            </CardContent>
          </Card>
        ))}
        <Stack direction={matches ? "row" : "column"} spacing={2}>
          <Button
            variant="outlined"
            color="primary"
            sx={{ py: 1 }}
            fullWidth
            onClick={() => dispatch(setFacultyModalOpen(true))}
          >
            Add Faculty
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ py: 1 }}
            fullWidth
            onClick={appendSubjectToCourse}
          >
            Save
          </Button>
        </Stack>
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
      </Stack>
    </DashboardLayout>
  );
};

export default SubjectDetails;
