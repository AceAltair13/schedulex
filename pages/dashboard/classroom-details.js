import { Container, Stack, Typography, Button, Fab, useTheme, useMediaQuery } from '@mui/material';
import React from 'react';
import {
    AddRounded,
    Class,
} from '@mui/icons-material'
import CustomInput from '../../components/Dashboard/CustomInput';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', flex: 1, minWidth: 90 },
    {
        field: 'Classroom Code',
        headerName: 'Classroom code',
        width: 150,
        flex: 1,
        editable: true,
    },

];

const rows = [
    { id: 1, classroomCode: 'Snow' },
    { id: 2, classroomCode: 'Lannister' },
    { id: 3, classroomCode: 'Lannister' },
    { id: 4, classroomCode: 'Stark' },
    { id: 5, classroomCode: 'Targaryen' },
    { id: 6, classroomCode: 'Melisandre' },
];
const ClassroomDetails = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md'))


    return (
        <Container maxWidth="xl">
            <Stack mt={6} direction="column" spacing={3}>
                <Typography variant="h4" color="primary.main" textAlign="center">
                    Add Classroom Details
                </Typography>
                <Stack direction="row" spacing={3} alignItems="center" px={2} py={2}>
                    <CustomInput
                        title="Classrooms"
                        icon={Class}
                        placeholder="Enter Classroom Code">


                    </CustomInput>

                    {matches ? (
                        <Fab color="primary" aria-label="add">
                            <AddRounded />
                        </Fab>
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
                />
            </Stack>
        </Container>
    );
}

export default ClassroomDetails;
