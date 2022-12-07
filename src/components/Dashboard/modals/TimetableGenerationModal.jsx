import {
  Box,
  CircularProgress,
  Dialog,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const TimetableGenerationModal = () => {
  const { generating } = useSelector((state) => state.timetable);

  return (
    <Dialog open={generating} maxWidth="sm" fullWidth>
      <Stack spacing={2} justifyContent="center" p={4}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Generating your timetable
        </Typography>
        <Box textAlign="center">
          <CircularProgress />
        </Box>
      </Stack>
    </Dialog>
  );
};

export default TimetableGenerationModal;
