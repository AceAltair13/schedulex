import {
    Box,
    CircularProgress,
    Dialog,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTimetableGenerating } from "../../../features/timetableSlice";

const TimetableGenerationModal = () => {
    const dispatch = useDispatch();
    const { generating } = useSelector((state) => state.timetable);

    const handleClose = () => {
        dispatch(setTimetableGenerating(false));
    };

    return (
        <Dialog open={generating} onClose={handleClose} maxWidth="sm" fullWidth>
            <Stack spacing={2} justifyContent="center">
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
