import styledComp from 'styled-components'
import MealItemForm from './MealItemForm'
import {styled} from '@mui/system'

const MealItem = ({meal}) => {

  return (
    <Container>
         <StyledItemInfo>
            <StyledTitle>{meal.title}</StyledTitle>
            <p>{meal.description}</p>
            <StyledPrice>${meal.price}</StyledPrice>
        </StyledItemInfo>
       <MealItemForm id={meal._id} price={meal.price} title={meal.title}/>
    </Container>
  )
}

export default MealItem

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
