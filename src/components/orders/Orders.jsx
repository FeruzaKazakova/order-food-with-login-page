import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../store/orders/ordersThunk'
import styledComp from 'styled-components'
import {styled} from '@mui/system'

const Orders = () => {
    const dispatch = useDispatch()
    const meals = useSelector((state) => state.orders.items)

    useEffect(() => {
        dispatch(getOrders())
    }, [dispatch])

  return (
    <Card>
        {meals.map((item) =>
        item.items.map((meal) => (
            <Container>
         <StyledItemInfo>
            <StyledTitle>{meal.title}</StyledTitle>
            <StyledPrice>${meal.price}</StyledPrice>
            <span>x{meal.amount}</span>
        </StyledItemInfo>
    </Container>
        ))
        )}
    </Card>
  )
}

export default Orders

const Card = styledComp.div`
    background: #FFFFFF;
    border-radius: 16px;
    width: 75%;
    margin: 60px auto;
    padding: 40px
`
const Container = styledComp.li`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #D6D6D6;
    margin-bottom: 20px;
    &:last-child{
        border-bottom: 0;
        margin-bottom: 0
    }
`

const StyledItemInfo = styledComp.div`
    margin-bottom: 20px;
    p{
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
    margin: 0px 0px 4px 0px
    }
`

const StyledTitle = styledComp.h4`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222222;
    margin: 0px 0px 4px 0px
`
const StyledPrice = styled('span')(({theme}) => ({
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '30px',
    color: theme.palette.primary.light
}))
