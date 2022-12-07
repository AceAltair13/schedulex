import React from "react";
import { Box, Stepper, Step, StepLabel, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setNewTimetable,
  setTimetableGenerating,
} from "../../features/timetableSlice";

const DashboardStepper = () => {
  const dispatch = useDispatch();
  const { workingDays } = useSelector((state) => state.institute);
  const { classrooms } = useSelector((state) => state.classroom);
  const { courses } = useSelector((state) => state.course);
  const { teachers } = useSelector((state) => state.teacher);
  const { subjects } = useSelector((state) => state.subject);

  const activeStepper = () => {
    if (workingDays.length === 0) {
      return 0;
    }
    if (classrooms.length === 0) {
      return 1;
    }
    if (courses.length === 0) {
      return 2;
    }
    if (teachers.length === 0) {
      return 3;
    }
    if (subjects.length === 0) {
      return 4;
    }
    return 5;
  };

  const runAlgorithm = async () => {
    dispatch(setTimetableGenerating(true));
    setTimeout(async () => {
      const worker = new Worker(
        new URL("../../helpers/geneticWorker.js", import.meta.url)
      );
      worker.postMessage({
        workingDays: workingDays,
        classrooms: classrooms,
        courses: courses,
      });
      worker.onmessage = (e) => {
        const best = JSON.parse(JSON.stringify(e.data));
        dispatch(
          setNewTimetable({
            ...best,
            timestamp: new Date(),
            days: workingDays,
          })
        );
        dispatch(setTimetableGenerating(false));
      };
    }, 2000);
  };

  return (
    <Box>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStepper()} alternativeLabel>
          <Step>
            <StepLabel>Institute Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Classroom Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Course Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Teacher Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Subject Details</StepLabel>
          </Step>
        </Stepper>
      </Box>
      <Box textAlign="center" mt={4}>
        <Button
          variant="contained"
          color="primary"
          sx={{ py: 2, px: 3 }}
          disabled={
            workingDays.length === 0 ||
            classrooms.length === 0 ||
            courses.length === 0 ||
            teachers.length === 0 ||
            subjects.length === 0
          }
          onClick={runAlgorithm}
        >
          Generate Timetable Now
        </Button>
      </Box>
    </Box>
  );
};

export default DashboardStepper;
