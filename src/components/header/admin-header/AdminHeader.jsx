import { AppBar, Button, Grid, Toolbar } from '@mui/material'
import { styled } from '@mui/system'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { signOut } from '../../../store/auth/authThunk'

const menus = [
    {
        path: 'meals',
        title:'Meals'
    },
    {
        path: 'orders',
        title: 'Orders'
    }
]

export const AdminHeader = () => {
    const dispatch = useDispatch()

    const signOutHandler = () => {
        dispatch(signOut())
    }

  return (
    <>
    <AppBar position="static">
        <Toolbar>
            <Container>
                <GridContainer>
          {menus.map(item => (
            <NavLink key={item.path} to={item.path} style={({isActive, theme}) => ({
                color: isActive ? "#AD5502" : 'white',
                background: isActive ? "#5A1F08" : "#5A1F08",
                padding: isActive ? '10px' : '10px',
                borderRadius: isActive ? '4px' : '4px',
                textDecoration: isActive ? "none" : "none",
             })
         }>{item.title}</NavLink>
          ))}
                </GridContainer>
          <Button color="inherit" onClick={signOutHandler}>Log out</Button>
            </Container>
        </Toolbar>
      </AppBar>
      </>
  )
}

const Container = styled(Grid)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.primary.main,
    width: '97%',
    alignItems: 'center',
    position:'fixed',
    zIndex: '800',
    marginTop:'-10rem',
    height: '5rem'
}))

const GridContainer = styled(Grid)(() => ({
    display: 'flex',
    alignItems: 'center',
    gap:'2rem'
}))