import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import {
    TextField,
    Grid,
    Button,
    Box,
    Fab,
    InputAdornment,
    useTheme,
    useMediaQuery,
    Container,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { CodeRounded, PersonRounded, AddRounded } from "@mui/icons-material";

const columns = [
    {
        field: "srNo",
        headerName: "Sr No",
        width: 100,
        align: "center",
        headerAlign: "center",
    },
    {
        field: "teacherCode",
        headerName: "Teacher Code",
        width: 120,
        align: "center",
        headerAlign: "center",
    },
    {
        field: "teacherName",
        headerName: "Teacher Name",
        minWidth: 200,
        flex: 1,
        align: "center",
        headerAlign: "center",
    },
];

const rows = [
    { id: 1, srNo: 1, teacherCode: "T-001", teacherName: "Teacher 1" },
    { id: 2, srNo: 2, teacherCode: "T-002", teacherName: "Teacher 2" },
    { id: 3, srNo: 3, teacherCode: "T-003", teacherName: "Teacher 3" },
    { id: 4, srNo: 4, teacherCode: "T-004", teacherName: "Teacher 4" },
    { id: 5, srNo: 5, teacherCode: "T-005", teacherName: "Teacher 5" },
];

const TeacherDetails = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <DashboardLayout title="Teachers">
            <Container
                maxWidth="xl"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                    p: 3,
                }}
            >
                <Grid
                    container
                    spacing={3}
                    sx={{
                        alignItems: "center",
                        textAlign: "center",
                    }}
                >
                    <Grid item xs={12} md={6}>
                        <TextField
                            label="Teacher Code"
                            variant="outlined"
                            fullWidth
                            placeholder="Enter Teacher Code"
                        />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <TextField
                            label="Teacher Name"
                            variant="outlined"
                            fullWidth
                            placeholder="Enter Teacher Name"
                        />
                    </Grid>
                    <Grid
                        item
                        md={1}
                        xs={12}
                        sx={{ textAlign: { xs: "center" } }}
                    >
                        {matches ? (
                            <Fab color="primary" aria-label="add" type="submit">
                                <AddRounded />
                            </Fab>
                        ) : (
                            <Button
                                variant="contained"
                                sx={{ py: 2, px: 2 }}
                                size="medium"
                                startIcon={<AddRounded color="primary" />}
                                type="submit"
                                fullWidth
                            >
                                Add
                            </Button>
                        )}
                    </Grid>
                </Grid>
                <Box mt={3}>
                    <DataGrid
                        autoHeight
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        disableSelectionOnClick
                    />
                </Box>
            </Container>
        </DashboardLayout>
    );
};

export default TeacherDetails;
