import {
  Container,
  Stack,
  Box,
  Typography,
  Fab,
  Button,
  useMediaQuery,
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import CustomInput from '../../components/Dashboard/CustomInput'
import React from 'react'
import { EventRounded, AddRounded } from '@mui/icons-material'
import CustomSelect from '../../components/Dashboard/CustomSelect'
import { useTheme } from '@emotion/react'
import CustomToolbar from '../../components/Dashboard/CustomToolbar'

const InstituteDetails = () => {
  const columns = [
    {
      field: 'day',
      headerName: 'Days of the week',
      minWidth: 200,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'slots',
      headerName: 'Slots per day',
      align: 'center',
      headerAlign: 'center',
      width: 200,
    },
  ]

  const rows = [
    { id: 1, day: 'Sunday', slots: 6 },
    { id: 2, day: 'Monday', slots: 6 },
    { id: 3, day: 'Tuesday', slots: 6 },
    { id: 4, day: 'Wednesday', slots: 6 },
    { id: 5, day: 'Thursday', slots: 6 },
    { id: 6, day: 'Friday', slots: 6 },
    { id: 7, day: 'Saturday', slots: 6 },
  ]

  const options = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
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
        <CustomInput
          title="Institute Name"
          placeholder="Enter institute Name"
        ></CustomInput>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box pr={3}>
            <EventRounded fontSize="large" />
          </Box>

          <Typography
            variant="h5"
            color="primary.main"
            fontWeight="fontWeightBold"
          >
            Add Working Days
          </Typography>
        </Box>
        <Stack direction={matches ? 'row' : 'column'} spacing={2}>
          <CustomSelect title="Select Day" options={options} />
          <CustomInput title="Slots per day" />
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
        <Box>
          <DataGrid
            autoHeight
            rows={rows}
            columns={columns}
            rowsPerPageOptions={[5]}
            checkboxSelection={true}
            components={{ Toolbar: CustomToolbar }}
          />
        </Box>
      </Stack>
    </Container>
  )
}

export default InstituteDetails
