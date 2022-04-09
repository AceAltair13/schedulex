import React from 'react'
import CustomInput from '../../components/Dashboard/CustomInput'
import { Button, Container, Stack, Typography, Fab, useMediaQuery, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import {
    AddRounded,
    Code,
    CodeRounded,
} from '@mui/icons-material'


const columns = [
    { field: 'id', headerName: 'ID', flex: 1, minWidth: 90 },
    {
        field: 'Course Code',
        headerName: 'Course code',
        width: 150,
        flex: 1,
        editable: true,
    },
    {
        field: 'Course Name',
        headerName: 'Course Name',
        width: 150,
        flex: 1,
        editable: true,
    },

];

const rows = [
    { id: 1, courseCode: 'Snow', courseName: 'Jon' },
    { id: 2, courseCode: 'Lannister', courseName: 'Cersei' },
    { id: 3, courseCode: 'Lannister', courseName: 'Jaime' },
    { id: 4, courseCode: 'Stark', courseName: 'Arya' },
    { id: 5, courseCode: 'Targaryen', courseName: 'Daenerys' },
    { id: 6, courseCode: 'Melisandre', courseName: null },
];

const CourseDetails = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md'))

    return (
        <Container maxWidth="xl">
            <Stack spacing={1} direction="column" pt={3} >
                <Typography variant="h4" color="primary.main" textAlign="center">
                    Add Course Details
                </Typography>
                <Stack direction="row" spacing={3} alignItems="center" px={2} py={2}>
                    <CustomInput
                        title="Course Code"
                        icon={CodeRounded}
                        placeholder="Enter Course Code">
                    </CustomInput>
                    <CustomInput
                        title="Course Name"
                        icon={Code}
                        placeholder="Enter Course Name">
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

export default CourseDetails;
