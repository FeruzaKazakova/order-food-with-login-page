import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { styled } from '@mui/system'
import { useDispatch } from 'react-redux'
import { signIn } from "../../store/auth/authThunk"

export const SignInPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    setError('')
  }

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
    setError('')
  }

  const submitHandler = () => {
    const data = {
      email,
      password,
    }
    dispatch(signIn(data))
      .unwrap()
      .then(() => navigate("/"))
      .catch((e) => {
        setError(e.response.data.message);
      })
  }

  const isEmailValid = () => {
    return email.length > 0 || (email.length > 0 && email.includes("@"));
  }

  const isPasswordValid = () => {
    return password.length > 0 || (password.length > 0 && password.length >= 6);
  }

  return (
    <MainGridContainer>
      <StyledGrid>
        <form>
          <StyledGrid2>
            <TextField
              error={!isEmailValid()}
              value={email}
              onChange={emailChangeHandler}
              label="Email"
            />
            <TextField
              error={!isPasswordValid()}
              value={password}
              onChange={passwordChangeHandler}
              label="Password"
              sx={{ marginTop: "1rem" }}
            />
            {error && <Typography>{error}</Typography>}
            <Button onClick={submitHandler} sx={{ marginTop: "1rem" }}>
              Sign In
            </Button>
            <Link to="/signup">{`Don't have an account?`}</Link>
          </StyledGrid2>
        </form>
      </StyledGrid>
    </MainGridContainer>
  )
}

const StyledGrid = styled(Grid)(() => ({
  width: "500px",
  backgroundColor: "#fff",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
}))

const StyledGrid2 = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}))

const MainGridContainer = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "10rem",
}))
