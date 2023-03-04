import {styled} from '@mui/system'
import { Button as MuiButton } from '@mui/material'
import { ReactComponent as BasketIcon } from '../../assets/icons/basket-icon.svg'

const BasketButton = ({count, ...restProps}) => {
  return <StyledButton {...restProps}>
    <BasketIcon/>
        <StyledTitle>Your Cart </StyledTitle>
        <StyledCounter id='counter'>{count || 0}</StyledCounter>
  </StyledButton>
}

export default BasketButton

const StyledButton = styled(MuiButton)(({theme}) => ({
    backgroundColor: theme.palette.primary.dark,
    borderRadius: '30px',
    padding: '12px 32px',
    border: 'none',

    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#FFFFFF',
    cursor: 'pointer',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',

    '&:hover':{
      backgroundColor: theme.palette.secondary.dark
    },
    '&:hover > #counter':{
      backgroundColor: theme.palette.secondary.main
  },
    '&.bump': {
    animation: 'bump 300ms ease-out'
  },
     '@keyframes bump':{
    '0%':{
      transform: 'scale(1)'
    },
    "10%" :{
      transform: 'scale(0.9)'
    },
    '30% ':{
      transform: 'scale(1.1)'
    },
    '50%' :{
      transform: 'scale(1.15)'
    },
   '100%':{
      transform: 'scale(1)'
    }
  }

}))

const StyledTitle = styled('span')(({theme}) => ({
    marginLeft: '12px',
    marginRight: '24px',
    color: theme.palette.primary.contrastText
  }))
const StyledCounter = styled('span')(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    borderRadius: '30px',
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '27px',
    padding: '4px 20px'
  }))