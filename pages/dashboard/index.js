import { Stack } from "@mui/material";
import React from "react";
import DashboardCounter from "../../components/Dashboard/DashboardCounter";
import DashboardStepper from "../../components/Dashboard/DashboardStepper";
import DashboardLayout from "../../components/Layouts/DashboardLayout";

const index = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Stack spacing={10}>
        <DashboardCounter />
        <DashboardStepper />
      </Stack>
    </DashboardLayout>
  );
};

export default index;
