import { Button, Container, Stack, TextField, Grid } from '@mui/material';
import React from 'react';
import CustomSelect from '../../components/Dashboard/CustomSelect';
import DashboardLayout from '../../components/Layouts/DashboardLayout';


const SubjectDetails = () => {

    const options = [
        'IT',
        'COMPS',
        'EXTC',
    ]


    return (
        <DashboardLayout title="Subject Details">
            <Container
                maxWidth="xl"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    p: 3,
                }}>
                <Stack spacing={3}>
                    <TextField
                        label="Subject Code"
                        fullWidth
                        variant="outlined"
                        placeholder='Enter Subject Code'
                    />
                    <TextField
                        label="Subject Name"
                        fullWidth
                        variant="outlined"
                        placeholder='Enter Subject Name'
                    />
                    <TextField
                        label="Slots per week"
                        fullWidth
                        variant="outlined"
                        placeholder='Enter Slots per week'
                    />
                    <CustomSelect
                        title="Select Course"
                        options={options}
                    />
                    <Grid container spacing={3} flexGrow={1}>
                        <Grid item xs={6} md={9}>
                            <Button variant="outlined" color="secondary" sx={{ py: 1 }}>
                                Add Faculty
                            </Button>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Button variant="contained" color="primary" sx={{ py: 1 }}>
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </DashboardLayout>
    );
}

export default SubjectDetails;
