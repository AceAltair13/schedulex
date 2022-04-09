import React from 'react'
import {
  Button,
  Container,
  Stack,
  Typography,
  Fab,
  Box,
  useMediaQuery,
  useTheme,
  TextField,
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { AddRounded, Code, CodeRounded } from '@mui/icons-material'
import DashboardLayout from '../../components/Layouts/DashboardLayout'
import CustomToolbar from '../../components/Dashboard/CustomToolbar'

const columns = [
  { field: 'id', headerName: 'ID', flex: 1, minWidth: 90 },
  {
    field: 'courseCode',
    headerName: 'Course code',
    width: 150,
    flex: 1,
    editable: true,
  },
  {
    field: 'courseName',
    headerName: 'Course Name',
    width: 150,
    flex: 1,
    editable: true,
  },
]

const rows = [
  { id: 1, courseCode: 'Snow', courseName: 'Jon' },
  { id: 2, courseCode: 'Lannister', courseName: 'Cersei' },
  { id: 3, courseCode: 'Lannister', courseName: 'Jaime' },
  { id: 4, courseCode: 'Stark', courseName: 'Arya' },
  { id: 5, courseCode: 'Targaryen', courseName: 'Daenerys' },
  { id: 6, courseCode: 'Melisandre', courseName: null },
]

const CourseDetails = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <DashboardLayout title="Course Details">
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 3,
        }}
      >
        <Stack spacing={3} direction="column">
          <Stack direction={matches ? 'row' : 'column'} spacing={2}>
            <TextField
              label="Course Code"
              placeholder="Enter Course Code"
              fullWidth
            ></TextField>
            <TextField
              label="Course Name"
              placeholder="Enter Course Name"
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
            components={{ Toolbar: CustomToolbar }}
            autoHeight
          />
        </Stack>
      </Container>
    </DashboardLayout>
  )
}

export default CourseDetails
