import React from "react";
import { Box, Stepper, Step, StepLabel, Button, Stack } from "@mui/material";
import { useSelector } from "react-redux";

const steps = [
    "Institute Details",
    "Classroom Details",
    "Course Details",
    "Teacher Details",
    "Subject Details",
];

const DashboardStepper = () => {
    const { workingDays } = useSelector((state) => state.institute);
    const { classrooms } = useSelector((state) => state.classroom);
    const { courses } = useSelector((state) => state.course);
    const { teachers } = useSelector((state) => state.teacher);
    const { subjects } = useSelector((state) => state.subject);

    return (
        <Box>
            <Box sx={{ width: "100%" }}>
                <Stepper activeStep={1} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
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
                >
                    Generate Timetable Now
                </Button>
            </Box>
        </Box>
    );
};

export default DashboardStepper;
