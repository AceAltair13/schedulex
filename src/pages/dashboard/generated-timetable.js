import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Timetable from "../../components/Dashboard/Timetable";
import DashboardLayout from "../../layouts/DashboardLayout";

const GeneratedTimetable = () => {
    const { id } = useParams();
    const { timetables } = useSelector((state) => state.timetable);
    const _timetables = timetables[id];
    const workingDays = _timetables.days;
    const { name } = useSelector((state) => state.institute);
    return (
        <DashboardLayout title="Generated timetables">
            <Typography variant="h3" textAlign="center" flexGrow={1} mb={3}>
                {name}
            </Typography>
            {_timetables &&
                _timetables.timetables.map((timetable, i) => (
                    <Timetable
                        key={i}
                        timetable={timetable.timetable}
                        classroom={timetable.classroom}
                        workingDays={workingDays}
                    />
                ))}
        </DashboardLayout>
    );
};

export default GeneratedTimetable;
