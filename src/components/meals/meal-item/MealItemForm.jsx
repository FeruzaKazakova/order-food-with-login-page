import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styledComponents from 'styled-components'
import { styled } from '@mui/system'
import { ReactComponent as PlusIcon } from '../../../assets/icons/plus-icon.svg'
import Button from '../../UI/Button'
import { addToBasket } from '../../../store/basket/basketThunk'
import { withAuthModal } from '../../hoc/withAuthModal'

const MealItemForm = ({ id, title, price, showAuthModal }) => {
  const dispatch = useDispatch()

  const [amount, setAmount] = useState(1)
  const isAuthorized = useSelector((state) => state.auth.isAuthorized)

  const amountChangeHandler = (event) => {
    setAmount(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    if(!isAuthorized){
      showAuthModal()
    }

    const basketItem = {
      id,
      price,
      title,
      amount,
    }

    dispatch(addToBasket(basketItem))
  }

  return (
    <>
    <StyledForm onSubmit={submitHandler}>
      <Container>
        <label htmlFor={id}>Amount</label>
        <StyledTextField
          value={amount}
          onChange={amountChangeHandler}
          id={id}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Container>
      <Button onClick={submitHandler}>
        <StyledIcon />
        Add
      </Button>
    </StyledForm>
    </>
  )
}

export default withAuthModal(MealItemForm)

const StyledTextField = styled(TextField)(() => ({
  width: '60px',
  marginTop: '-0.6rem',
}))

const StyledIcon = styledComponents(PlusIcon)`
    margin-right: 10px;
`

const Container = styledComponents.div`
    margin-bottom: 12px;
    label{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222222;
    margin-right: 20px;
    }
    input{
        width: 60px;
        height: 32px;
        border-radius: 6px;
        border: 1px solid #d6d6d6;
        outline: none;
        padding: 4px 12px;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px
    }
`

const StyledForm = styledComponents.form`
    display: flex;
    flex-direction: column;
    align-items: flex-end
`
