import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {getMeals} from '../../store/meals/mealsThunk'
import MealItem from './meal-item/MealItem'

const Meals = () => {
    const dispatch = useDispatch()
    const { meals, isLoading, error } = useSelector((state) => state.meals)

    useEffect(() => {
        dispatch(getMeals())
    }, [dispatch])

    return (
        <Card>
            {isLoading && <p>Loading...</p>}
            {error && <p>Failed loading</p>}
        {meals.map((meal) => {
            return <MealItem meal={meal} key={meal._id}/>
        })}
        </Card>
    )
}

export default Meals

const Card = styled.div`
    background: #FFFFFF;
    border-radius: 16px;
    width: 75%;
    margin: 60px auto;
    padding: 40px
`