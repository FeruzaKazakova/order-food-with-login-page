import React, { useEffect, useState } from 'react'
import styledComp from 'styled-components'
import Button from '../../components/UI/Button'
import { useDispatch, useSelector } from 'react-redux'
import MealItem from './meal-item/MealItem'
import { deleteMeals, getMeals } from '../../store/meals/mealsThunk'
import { useSearchParams } from 'react-router-dom'
import MealItemForm from './meal-item/MealItemForm'
import EditMealItemForm from './meal-item/EditMealItemForm'

const AdminMeals = () => {
    const dispatch = useDispatch()
    const {meals} = useSelector((state) => state.meals)
    const [searchParams, setSearchParams] = useSearchParams()
    const [isEditing, setIsEditing] = useState(false)
    const [mealIsEditing, setMealIsEditing] = useState(null)
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    useEffect(() => {
        dispatch(getMeals())
    }, [dispatch])

    const openModalHandler = () => {
        searchParams.set('modal', 'addNewMeal')
        setSearchParams(searchParams)
    }
    const closeModalHandler = () => {
        searchParams.delete('modal')
        setSearchParams(searchParams)
        setIsEditing(false)
    }

    const deleteMealHandler = (id) => {
        dispatch(deleteMeals(id))
    }

    const editMealHandler = (id) => {
        setMealIsEditing(id)
        setIsEditing(true)
    }

  return (
    <div>
        <Card>
            {searchParams.has('modal') && (
            <MealItemForm title={title} 
            description={description} 
            price={price} 
            setDescription={setDescription} 
            setPrice={setPrice} 
            setTitle={setTitle}
            open={openModalHandler}
            onClose={closeModalHandler}/>
        )}
            <Button style={{marginBottom: "2rem"}} onClick={openModalHandler}>Add Meal</Button>
            {meals.map((meal) => (
                <div key={meal._id}>
                    {mealIsEditing === meal._id && (
                        <EditMealItemForm meal={meal} setIsEditing={setIsEditing} open={isEditing} onClose={closeModalHandler} 
                        title={title} 
                        description={description} 
                        price={price} 
                        setDescription={setDescription} 
                        setPrice={setPrice} 
                        setTitle={setTitle}/>
                    )}
                <MealItem meal={meal} deleteMealHandler={deleteMealHandler} editMealHandler={editMealHandler} setEdit={setIsEditing}/>
                </div>
            ))}
        </Card>
    </div>
  )
}

export default AdminMeals

const Card = styledComp.div`
    background: #FFFFFF;
    border-radius: 16px;
    width: 75%;
    margin: 60px auto;
    padding: 40px
`