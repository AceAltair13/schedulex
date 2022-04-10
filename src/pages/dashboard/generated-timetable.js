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
  return (
    <DashboardLayout title="Generated timetables">
      <Typography variant="h3" textAlign="center" flexGrow={1} mb={3}>
        SAKEC
      </Typography>
      {_timetables &&
        _timetables.timetables.map((timetable) => (
          <Timetable
            timetable={timetable.timetable}
            classroom={timetable.classroom}
          />
        ))}
    </DashboardLayout>
  );
};

export default GeneratedTimetable;
