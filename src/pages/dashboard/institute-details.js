import {
    Stack,
    Box,
    Typography,
    Fab,
    Button,
    useMediaQuery,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { EventRounded, AddRounded } from "@mui/icons-material";
import CustomSelect from "../../components/Dashboard/CustomSelect";
import { useTheme } from "@emotion/react";
import CustomToolbar from "../../components/Dashboard/CustomToolbar";
import DashboardLayout from "../../layouts/DashboardLayout";
import { useDispatch, useSelector } from "react-redux";

const InstituteDetails = () => {
    const dispatch = useDispatch();
    const [day, setDay] = useState("");
    const { unusedDays } = useSelector((state) => state.institute);

    const columns = [
        {
            field: "day",
            headerName: "Day",
            align: "center",
            headerAlign: "center",
            flex: 1,
        },
        {
            field: "slots",
            headerName: "Slots per day",
            align: "center",
            headerAlign: "center",
            flex: 1,
        },
    ];
    const rows = [];

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <DashboardLayout title="Institute">
            <Stack spacing={2}>
                <Typography variant="h6" gutterBottom>
                    Institute Name
                </Typography>
                <TextField label="Enter Institute Name" />
                <Box />
                <Typography variant="h6" gutterBottom>
                    Days of the week
                </Typography>
                <Stack direction={matches ? "row" : "column"} spacing={2}>
                    <FormControl fullWidth>
                        <InputLabel>Select Day</InputLabel>
                        <Select
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                            label="Select Day"
                        >
                            {unusedDays.map((day) => (
                                <MenuItem value={day} key={day}>
                                    {day}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField type="number" label="Slots per day" />
                    {matches ? (
                        <Box>
                            <Fab color="primary" aria-label="add">
                                <AddRounded />
                            </Fab>
                        </Box>
                    ) : (
                        <Button
                            variant="contained"
                            sx={{ p: 2 }}
                            size="medium"
                            startIcon={<AddRounded color="primary.main" />}
                            fullWidth
                        >
                            Add
                        </Button>
                    )}
                </Stack>
                <Box />
                <DataGrid
                    autoHeight
                    rows={rows}
                    columns={columns}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    components={{ Toolbar: CustomToolbar }}
                />
            </Stack>
        </DashboardLayout>
    );
};

export default InstituteDetails;
