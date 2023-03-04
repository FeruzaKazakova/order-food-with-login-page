import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {styled} from '@mui/system'
import { useDispatch } from 'react-redux'
import { signIn } from '../store/auth/authThunk'

export const SignInPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailChangeHandler = (event) => {
        setEmail(event.target.value)
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value)
    }

    const submitHandler = async() => {
        try{
        const data = {
            email,
            password
        }
        await dispatch(signIn(data)).unwrap()
        navigate('/')
    }catch(error){
        console.log(error);
    }
    }

  return (
    <MainGridContainer>
    <StyledGrid>
        <form>
            <StyledGrid2>
            <TextField value={email} onChange={emailChangeHandler} label="Email" />
            <TextField value={password} onChange={passwordChangeHandler} label="Password" sx={{marginTop: '1rem'}}/>
            <Button onClick={submitHandler} sx={{marginTop: '1rem'}}>Sign In</Button>
            <Link to='/signup'>{`Don't have an account?`}</Link>
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