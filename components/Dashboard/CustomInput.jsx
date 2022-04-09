import React from 'react'
import { useTheme } from '@emotion/react'
import { Stack, TextField, InputAdornment, useMediaQuery } from '@mui/material'

const CustomInput = ({title, icon, placeholder, props}) => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Stack direction="row" alignItems="center" spacing={3}>
              {matches && (
                <icon color="primary.main" fontSize="large" />
              )}
              <TextField
                label={title}
                placeholder={placeholder}
                variant="outlined"
                fullWidth
                {...props}
                InputProps={{
                  startAdornment: !matches ? (
                    <InputAdornment position="start">
                      <icon />
                    </InputAdornment>
                  ) : null,
                }}
              />
            </Stack>
  )
}

export default CustomInput