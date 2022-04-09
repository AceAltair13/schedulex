import { Stack } from "@mui/material";
import React from "react";
import DashboardCounter from "../../components/Dashboard/DashboardCounter";
import DashboardStepper from "../../components/Dashboard/DashboardStepper";
import MyTimetablesTable from "../../components/Dashboard/MyTimetablesTable";
import DashboardLayout from "../../layouts/DashboardLayout";

const Dashboard = () => {
    return (
        <DashboardLayout title="Dashboard">
            <Stack spacing={10}>
                <DashboardCounter />
                <DashboardStepper />
                <MyTimetablesTable />
            </Stack>
        </DashboardLayout>
    );
};

export default Dashboard;
