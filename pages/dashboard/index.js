import React from "react";
import DashboardCounter from "../../components/Dashboard/DashboardCounter";
import DashboardLayout from "../../components/Layouts/DashboardLayout";

const index = () => {
  return (
    <DashboardLayout title="Dashboard">
      <DashboardCounter />
    </DashboardLayout>
  );
};

export default index;
