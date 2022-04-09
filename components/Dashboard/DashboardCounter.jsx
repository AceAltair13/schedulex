import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const tiles = [
  {
    count: 5,
    title: "Work Days",
  },
  {
    count: 10,
    title: "Classrooms",
  },
  {
    count: 6,
    title: "Courses",
  },
  {
    count: 20,
    title: "Teachers",
  },
  {
    count: 30,
    title: "Subjects",
  },
];

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
                mb: 1
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
  return (
    <Grid container justifyContent="space-around">
      {tiles.map((tile) => (
        <DashboardCounterItem count={tile.count} title={tile.title} />
      ))}
    </Grid>
  );
};

export default DashboardCounter;
