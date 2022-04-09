import React from "react";
import { Box, Stepper, Step, StepLabel } from "@mui/material";

const steps = [
  "Institute Details",
  "Classroom Details",
  "Course Details",
  "Teacher Details",
  "Subject Details",
];

const Dashboardstepper = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default Dashboardstepper;
