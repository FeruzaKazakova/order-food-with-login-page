import { Alert } from '@mui/material'
import { Snackbar as MuiSnackbar } from '@mui/material'
import React from 'react'

export const Snackbar = ({isOpen, onClose, message, severity, autoHideDuration}) => {
  return (
    <MuiSnackbar
    open={isOpen}
    autoHideDuration={autoHideDuration || 4000}
    onClose={onClose}
    anchorOrigin={{vertical:'top', horizontal:'right'}}
   >
    <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
  {message}
  </Alert>
  </MuiSnackbar>
  )
}
