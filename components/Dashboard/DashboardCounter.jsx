import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const tiles = [
  {
    count: 10,
    title: "Classrooms",
  },
  {
    count: 10,
    title: "Classrooms",
  },
  {
    count: 10,
    title: "Classrooms",
  },
  {
    count: 10,
    title: "Classrooms",
  },
  {
    count: 10,
    title: "Classrooms",
  },
];

const DashboardCounterItem = ({ count, title }) => {
  return (
    <Grid item lg={2} md={4} sm={12} xs={12}>
      <Card>
        <CardContent sx={{ p: 4 }}>
          <Stack>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
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
    <Grid container spacing={4} justifyContent="center">
      {tiles.map((tile) => (
        <DashboardCounterItem count={tile.count} title={tile.title} />
      ))}
    </Grid>
  );
};

export default DashboardCounter;
