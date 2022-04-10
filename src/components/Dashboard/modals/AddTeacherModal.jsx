import {
  Box,
  Button,
  Chip,
  Dialog,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFacultyModalOpen,
  setTempFaculty,
} from "../../../features/subjectSlice";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const AddTeacherModal = () => {
  const dispatch = useDispatch();
  const { facultyModalOpen, tempFaculty } = useSelector(
    (state) => state.subject
  );
  const { teachers } = useSelector((state) => state.teacher);
  const { classrooms } = useSelector((state) => state.classroom);
  const [teacher, setTeacher] = useState("");
  const [_classrooms, _setClassrooms] = useState([]);
  const [_timeslots, _setTimeslots] = useState(0);
  const theme = useTheme();

  const handleCourseFacultySubmit = () => {
    dispatch(
      setTempFaculty([
        ...tempFaculty,
        {
          teacher: teacher,
          classrooms: _classrooms,
          slots: parseInt(_timeslots),
        },
      ])
    );
    dispatch(setFacultyModalOpen(false));
  };

  const handleClassroomChange = (event) => {
    const {
      target: { value },
    } = event;
    _setClassrooms(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleTeacherChange = (e) => {
    setTeacher(e.target.value);
  };

  return (
    <Dialog
      open={facultyModalOpen}
      maxWidth="md"
      fullWidth
      onClose={() => dispatch(setFacultyModalOpen(false))}
    >
      <Stack spacing={2} justifyContent="center" p={4}>
        <Typography variant="h6" gutterBottom>
          Teacher Name
        </Typography>
        <FormControl fullWidth>
          <InputLabel>Select Teacher</InputLabel>
          <Select
            label="Select Teacher"
            value={teacher}
            onChange={handleTeacherChange}
          >
            {teachers.map((t) => (
              <MenuItem value={t.code} key={t.code}>
                {t.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography variant="h6" gutterBottom>
          Classrooms
        </Typography>
        <FormControl fullWidth>
          <InputLabel>Select Classrooms</InputLabel>
          <Select
            label="Select Classrooms"
            value={_classrooms}
            onChange={handleClassroomChange}
            multiple
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {classrooms.map((t) => (
              <MenuItem
                key={t}
                value={t}
                style={getStyles(t, _classrooms, theme)}
              >
                {t}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography variant="h6" gutterBottom>
          Timeslots
        </Typography>
        <TextField
          label="Select Timeslots"
          fullWidth
          type="number"
          value={_timeslots}
          onChange={(e) => _setTimeslots(e.target.value)}
        />
        <Box textAlign="end">
          <Button
            variant="contained"
            size="large"
            onClick={handleCourseFacultySubmit}
          >
            Submit
          </Button>
        </Box>
      </Stack>
    </Dialog>
  );
};

export default AddTeacherModal;
