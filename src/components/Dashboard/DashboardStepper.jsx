import React, { useState } from "react";
import { Box, Stepper, Step, StepLabel, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import GeneticTimeTable from "../../algorithm/model/GeneticTimeTable";
import data from "../../algorithm/data/input";
import { setTimetableGenerating } from "../../features/timetableSlice";

// const steps = [
//   "Institute Details",
//   "Classroom Details",
//   "Course Details",
//   "Teacher Details",
//   "Subject Details",
// ];

const DashboardStepper = () => {
  const dispatch = useDispatch();
  const { workingDays } = useSelector((state) => state.institute);
  const { classrooms } = useSelector((state) => state.classroom);
  const { courses } = useSelector((state) => state.course);
  const { teachers } = useSelector((state) => state.teacher);
  const { subjects } = useSelector((state) => state.subject);

  const activeStepper = () => {
    if (workingDays.length !== 0) {
      if (classrooms.length !== 0) {
        if (courses.length !== 0) {
          if (teachers.length !== 0) {
            if (subjects.length !== 0) {
              return 5;
            }
            return 4;
          }
          return 3;
        }
        return 2;
      }
      return 1;
    } else {
      return 0;
    }
  };
  //   const geneticTimeTable = new GeneticTimeTable(
  //     workingDays,
  //     classrooms,
  //     courses,
  //     true
  //   );
  const geneticTimeTable = new GeneticTimeTable(
    data.working_days,
    data.classrooms,
    data.school_data,
    true
  );
  const runAlgorithm = async () => {
    dispatch(setTimetableGenerating(true));
    let bestChild = await geneticTimeTable.run(dispatch);
    console.log(bestChild);
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
