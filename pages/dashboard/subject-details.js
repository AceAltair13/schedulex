import { useTheme } from '@emotion/react'
import {
  Button,
  Container,
  Stack,
  TextField,
  Grid,
  useMediaQuery,
} from '@mui/material'
import React from 'react'
import CustomSelect from '../../components/Dashboard/CustomSelect'
import DashboardLayout from '../../components/Layouts/DashboardLayout'
import { DataGrid } from '@mui/x-data-grid'
import CustomToolbar from '../../components/Dashboard/CustomToolbar'

const SubjectDetails = () => {
  const columns = [
    {
      field: 'srNo',
      headerName: 'Sr No',
      width: 100,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'subjectCode',
      headerName: 'Subject Code',
      width: 120,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'subjectName',
      headerName: 'Subject Name',
      minWidth: 200,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'slotsPerWeek',
      headerName: 'Slots per week',
      minWidth: 200,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'selectCourse',
      headerName: 'Selected Course',
      minWidth: 200,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
    },
  ]

  const rows = [
    {
      id: 1,
      srNo: 1,
      subjectCode: 'T-001',
      subjectName: 'Teacher 1',
      slotsPerWeek: '2',
      selectCourse: 'IT',
    },
    {
      id: 2,
      srNo: 2,
      subjectCode: 'T-002',
      subjectName: 'Teacher 2',
      slotsPerWeek: '4',
      selectCourse: 'COMPS',
    },
    {
      id: 3,
      srNo: 3,
      subjectCode: 'T-003',
      subjectName: 'Teacher 3',
      slotsPerWeek: '2',
      selectCourse: 'IT',
    },
    {
      id: 4,
      srNo: 4,
      subjectCode: 'T-004',
      subjectName: 'Teacher 4',
      slotsPerWeek: '3',
      selectCourse: 'COMPS',
    },
    {
      id: 5,
      srNo: 5,
      subjectCode: 'T-005',
      subjectName: 'Teacher 5',
      slotsPerWeek: '4',
      selectCourse: 'IT',
    },
  ]
  const options = ['IT', 'COMPS', 'EXTC']
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <DashboardLayout title="Subjects">
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          p: 3,
        }}
      >
        <Stack spacing={3}>
          <TextField
            label="Subject Code"
            fullWidth
            variant="outlined"
            placeholder="Enter Subject Code"
          />
          <TextField
            label="Subject Name"
            fullWidth
            variant="outlined"
            placeholder="Enter Subject Name"
          />
          <TextField
            label="Slots per week"
            fullWidth
            variant="outlined"
            placeholder="Enter Slots per week"
          />
          <CustomSelect title="Select Course" options={options} />
          {/* <Grid container spacing={3} flexGrow={1}>
                        <Grid item xs={6} md={9}> */}
          <Stack direction={matches ? 'row' : 'column'} spacing={2}>
            <Button variant="outlined" color="primary" sx={{ py: 1 }} fullWidth>
              Add Faculty
            </Button>
            {/* </Grid>
                        <Grid item xs={6} md={3}> */}
            <Button
              variant="contained"
              color="primary"
              sx={{ py: 1 }}
              fullWidth
            >
              Save
            </Button>
          </Stack>
          {/* </Grid>
                    </Grid> */}

          <DataGrid
            autoHeight
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            components={{
              Toolbar: CustomToolbar,
            }}
          />
        </Stack>
      </Container>
    </DashboardLayout>
  )
}

export default SubjectDetails
