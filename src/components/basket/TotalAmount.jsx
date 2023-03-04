import styledComp from 'styled-components'
import Button from '../UI/Button'
import {styled} from '@mui/system'

const TotalAmount = ({price, onClose, onOrder}) => {
    const orderButton = price > 0 ? <Button onClick={onOrder}>Order</Button> : null

    const fixedPrice = price.toFixed(2)

  return (
    <div style={{paddingTop: 30}}>
        <InfoContainer>
            <Label>Total amount</Label>
            <Price>${fixedPrice}</Price>
        </InfoContainer>
        <ActionButtonsCpntainer>
            <Button variant='outlined' onClick={onClose}>Close</Button>
            {orderButton}
        </ActionButtonsCpntainer>
    </div>
  )
}

export default TotalAmount

const Label = styledComp.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #222222;
  margin: 0
`

const Price = styled('p')(({theme}) => ({
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '22px',
    lineHeight: '33px',
    margin: 0,
    color: theme.palette.primary.main
}))

const InfoContainer = styledComp.div`
    display: flex;
    justify-content: space-between
`
const ActionButtonsCpntainer = styledComp.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
    gap: 16px
`