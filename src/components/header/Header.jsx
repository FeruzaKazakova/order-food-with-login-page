import { Button } from '@mui/material'
import {styled} from '@mui/system'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styledComponents from 'styled-components'
import { getTheme } from '../../lib/theme'
import { signOut } from '../../store/auth/authThunk'
import { getBasket } from '../../store/basket/basketThunk'
import { uiActions } from '../../store/ui/uiSlice'
import { withAuthModal } from '../hoc/withAuthModal'
import BasketButton from './BasketButton'

function Header ({onShowBasket, showAuthModal}) {
    const navigate = useNavigate()
    const isAuthorized = useSelector((state) => state.auth.isAuthorized)
    const dispatch = useDispatch()
    const items = useSelector((state) => state.basket.items)
    const [animationClass, setAnimationClass] = useState('')
    const themeMode = useSelector((state) => state.ui.themeMode)

    useEffect(()=>{
        dispatch(getBasket()) 
    },[dispatch])

    const calculateTotalAmount = () => {
        const sum = items.reduce((s, item) => {
            return s + item.amount
        }, 0)
        return sum
    }

    useEffect(() => {
    setAnimationClass('bump')

    const id = setTimeout(() => {
        setAnimationClass('')
    }, 300);

    return () => {
        clearTimeout(id)
    }
    }, [items])

    const themeChangeHandler = () => {
        const theme = themeMode === 'light' ? 'dark' : 'light'
        dispatch(uiActions.changeTheme(theme))
    }

    const signOutHandler = () => {
        dispatch(signOut())
    }

    const signInHandler = () => {
        navigate("/signin")
    }

    const goToMyOrders = () => {
        if(!isAuthorized){
            return showAuthModal()
        }
        return navigate('/myorders')
    }

    return <Container>
        <Logo>ReactMeals</Logo>
        <StyledButton onClick={themeChangeHandler}>{themeMode === 'light' ? 'Dark Mode' : 'Light Mode'}</StyledButton>
        {isAuthorized ? (<StyledButton onClick={signOutHandler}>Sign Out</StyledButton>
        ) : ( 
        <StyledButton onClick={signInHandler}>Sign In</StyledButton>)
        }
        <StyledButton onClick={goToMyOrders}>My Orders</StyledButton>
        <BasketButton className={animationClass} onClick={onShowBasket} count={calculateTotalAmount()}/>
    </Container>
}

export default withAuthModal(Header)

const StyledButton = styled(Button)(({theme}) => ({
    padding:' 10px 26px',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '24px',
    color: 'white',
    border: 'none',
    backgroundColor:`${getTheme().palette.primary.dark}`,
  
    '&:hover' : {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
      },
    
      '&:active' : {
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.primary.contrastText,
      }
  }))

const Container = styled('div')(({theme}) => ({
    width: '100%',
    height: '101px',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '120px',
    paddingRight: '120px',
    position: 'fixed',
    zIndex: '1',
    top: '0'
}))

const Logo = styledComponents.p`
    font-weight: 600;
    font-size: 38px;
    line-height: 57px;
    color: #FFFFFF;
    margin: 0
`