import { Dialog, DialogContent, DialogContentText, DialogTitle, Button as MuiButton, DialogActions } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const withAuthModal = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const goToSignInHandler = () => {
        setIsModalOpen(false)
        navigate('/signin')
    }
    return(
        <>
        <Component {...props} showAuthModal={() => setIsModalOpen(true)}/>

        <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Not Authorized</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            In order to complete this action, please sign in
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <MuiButton onClick={goToSignInHandler}>Go to sign in</MuiButton>
          <MuiButton onClick={() => setIsModalOpen(false)}>Ok</MuiButton>
        </DialogActions>
      </Dialog>
        </>
    )
  }
  return Wrapper
}
