import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {styled} from '@mui/system'
import { useDispatch } from 'react-redux'
import { signUp } from '../store/auth/authThunk'
import { UserRoles } from '../constants/common'

export const SignUpPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [confirmPassword, setConfirmPassword] = useState('')

    const emailChangeHandler = (event) => {
        setEmail(event.target.value)
    }

    const nameChangeHandler = (event) => {
        setName(event.target.value)
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value)
    }

    const confirmChangeHandler = (event) => {
        setConfirmPassword(event.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const data = {
            email,
            name, 
            password,
            role: UserRoles.ADMIN
        }
        dispatch(signUp(data))
        if(data.email.length > 1){
            alert("Your data has been sent for verification!")
        }else{
            alert("Fill the form!")
        }
    }

  return (
    <MainGridContainer>
    <StyledGrid>
        <form onSubmit={submitHandler}>
            <StyledGrid2>
            <TextField value={name} onChange={nameChangeHandler} label='Name'/>
            <TextField value={email} onChange={emailChangeHandler} label='Email' sx={{marginTop: '1rem'}}/>
            <TextField value={password} onChange={passwordChangeHandler} label='Password' sx={{marginTop: '1rem'}}/>
            <TextField value={confirmPassword} onChange={confirmChangeHandler} label='Confirm password' sx={{marginTop: '1rem'}}/>
            <Button type='submit' sx={{marginTop: '1rem'}}>Sign Up</Button>
            <Link to='/signin'>Have an account?</Link>
            </StyledGrid2>
        </form>
    </StyledGrid>
    </MainGridContainer>
  )
}

const StyledGrid = styled(Grid)(() => ({
    width: '500px',
    backgroundColor: '#fff',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column'
}))

const StyledGrid2 = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column'
}))

const MainGridContainer = styled(Grid)(() => ({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10rem'
}))