import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const DashboardCounterItem = ({ count, title }) => {
    return (
        <Grid item lg={2} md={4} sm={12} xs={12}>
            <Card sx={{ backgroundColor: "primary.main" }}>
                <CardContent sx={{ p: 4 }}>
                    <Stack sx={{ color: "white" }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                mb: 1,
                            }}
                        >
                            <Typography variant="h3">{count}</Typography>
                        </Box>
                        <Typography variant="h6" textAlign="center">
                            {title}
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
        </Grid>
    );
};

const DashboardCounter = () => {
    const { workingDays } = useSelector((state) => state.institute);
    const { classrooms } = useSelector((state) => state.classroom);
    const { courses } = useSelector((state) => state.course);
    const { teachers } = useSelector((state) => state.teacher);
    const { subjects } = useSelector((state) => state.subject);

    return (
        <Grid
            container
            justifyContent="space-around"
            spacing={{ md: 1, sm: 2, xs: 3 }}
        >
            <DashboardCounterItem
                count={workingDays.length}
                title="Work Days"
            />
            <DashboardCounterItem
                count={classrooms.length}
                title="Classrooms"
            />
            <DashboardCounterItem count={courses.length} title="Courses" />
            <DashboardCounterItem count={teachers.length} title="Teachers" />
            <DashboardCounterItem count={subjects.length} title="Subjects" />
        </Grid>
    );
};

export default DashboardCounter;
