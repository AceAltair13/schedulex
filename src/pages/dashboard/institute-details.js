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
import DoneIcon from "@mui/icons-material/Done";
import { setInstituteName, setWorkingDay } from "../../features/instituteSlice";

const InstituteDetails = () => {
    const dispatch = useDispatch();
    const [day, setDay] = useState("");
    const [slots, setSlots] = useState(0);
    const [name, setName] = useState("");
    const { workingDays, nonWorkingDays } = useSelector(
        (state) => state.institute
    );

    const handleInstituteNameChange = (e) => {
        setName(e.target.value);
    };

    const handleDayChange = (e) => {
        setDay(e.target.value);
    };

    const handleSlotChange = (e) => {
        setSlots(e.target.value);
    };

    const addWorkingDay = () => {
        dispatch(setWorkingDay({ day, slots, id: day }));
    };

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

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <DashboardLayout title="Institute">
            <Stack spacing={2}>
                <Typography variant="h6" gutterBottom>
                    Institute Name
                </Typography>
                <Stack direction="row" spacing={2}>
                    <TextField
                        label="Enter Institute Name"
                        fullWidth
                        value={name}
                        onChange={handleInstituteNameChange}
                    />
                    <Box>
                        <Fab
                            color="primary"
                            onClick={() => dispatch(setInstituteName(name))}
                        >
                            <DoneIcon />
                        </Fab>
                    </Box>
                </Stack>
                <Box />
                <Typography variant="h6" gutterBottom>
                    Days of the week
                </Typography>
                <Stack direction={matches ? "row" : "column"} spacing={2}>
                    <FormControl fullWidth>
                        <InputLabel>Select Day</InputLabel>
                        <Select
                            value={day}
                            onChange={handleDayChange}
                            label="Select Day"
                        >
                            {nonWorkingDays.map((day) => (
                                <MenuItem value={day} key={day}>
                                    {day}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        type="number"
                        label="Slots per day"
                        onClick={handleSlotChange}
                    />
                    {matches ? (
                        <Box>
                            <Fab color="primary" onClick={addWorkingDay}>
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
                    rows={workingDays}
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
