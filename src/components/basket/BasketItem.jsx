import styledComp from 'styled-components'
import Button from '../UI/Button'
import {styled} from '@mui/system'
// import { ReactComponent as DecreaseAmountIcon } from "../../assets/icons/minus.svg";
// import { ReactComponent as IncreaseAmountIcon } from "../../assets/icons/plus.svg";

const BasketItem = ({title, price, amount, decreaseAmount, increaseAmount}) => {

  return (
    <Container>
        <Title>
            {title}
        </Title>
        <Content>
            <PriceAndAmountContainer>
                <Price>${price}</Price>
                <Amount>x{amount}</Amount>
            </PriceAndAmountContainer>
            <CounterContainer>
                <Button borderStyle='squared' variant='outline' onClick={decreaseAmount}>-</Button>
                <Button borderStyle='squared' variant='outlined' onClick={increaseAmount}>+</Button>
            </CounterContainer>
        </Content>
    </Container>
  )
}

export default BasketItem

const Container = styledComp.div`
    padding: 24px 0px;
    width: 95%;
    border-bottom: 1px solid #D6D6D6;
`
const Title = styledComp.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #222222;
    margin: 0 0 -10px 0
`
const Price = styled('p')(({theme}) => ({
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '22px',
    lineHeight: '33px',
    color: theme.palette.primary.main
}))

const Amount = styledComp.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: block;
    color: #222222;
    border: 1px solid #D6D6D6;
    padding: 6px 14px;
    border-radius: 6px
`

const PriceAndAmountContainer = styledComp.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 153px
`
const CounterContainer = styledComp.div`
    display: flex;
    gap:14px
`
const Content = styledComp.div`
    display: flex;
    justify-content: space-between;
    align-items: center
`