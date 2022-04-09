import {
    Container,
    Stack,
    Typography,
    Button,
    Fab,
    TextField,
    Box,
    useTheme,
    useMediaQuery,
    Toolbar,
} from "@mui/material";
import React from "react";
import { AddRounded, Class } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import DashboardLayout from "../../layouts/DashboardLayout";
import CustomToolbar from "../../components/Dashboard/CustomToolbar";

const columns = [
    { field: "id", headerName: "ID", minWidth: 90 },
    {
        field: "classroomCode",
        headerName: "Classroom code",
        minWidth: 150,
        flex: 1,
    },
];

const rows = [
    { id: 1, classroomCode: "Snow" },
    { id: 2, classroomCode: "Lannister" },
    { id: 3, classroomCode: "Lannister" },
    { id: 4, classroomCode: "Stark" },
    { id: 5, classroomCode: "Targaryen" },
    { id: 6, classroomCode: "Melisandre" },
];
const ClassroomDetails = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <DashboardLayout title="Classrooms">
            <Container
                maxWidth="xl"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    p: 3,
                }}
            >
                <Stack direction="column" spacing={2}>
                    <Stack
                        direction={matches ? "row" : "column"}
                        spacing={1}
                        alignItems="center"
                    >
                        <TextField
                            label="Classroom Code"
                            icon={Class}
                            placeholder="Enter Classroom Code"
                            fullWidth
                        ></TextField>
                        {matches ? (
                            <Box>
                                <Fab color="primary" aria-label="add">
                                    <AddRounded />
                                </Fab>
                            </Box>
                        ) : (
                            <Button
                                variant="contained"
                                sx={{ py: 2, px: 2 }}
                                size="medium"
                                startIcon={<AddRounded color="primary.main" />}
                                fullWidth
                            >
                                Add
                            </Button>
                        )}
                    </Stack>

                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        disableSelectionOnClick
                        autoHeight
                        components={{ Toolbar: CustomToolbar }}
                    />
                </Stack>
            </Container>
        </DashboardLayout>
    );
};

export default ClassroomDetails;
