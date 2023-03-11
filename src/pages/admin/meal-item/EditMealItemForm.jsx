import styled from 'styled-components'
import { Modal as MuiModal, TextField} from '@mui/material'
import { Box } from '@mui/material'
import Button from '../../../components/UI/Button'
import { useDispatch } from 'react-redux'
import { updateMeals } from '../../../store/meals/mealsThunk'

const EditMealItemForm = ({ 
    title, 
    meal,
    setIsEditing,
    price, 
    description, 
    onClose, 
    open, 
    setDescription, 
    setTitle, 
    setPrice}) => {
        
    const dispatch = useDispatch()

    const titleChangeHandler = (e) => {
        setTitle(e.target.value)
    }
    const priceChangeHandler = (e) => {
        setPrice(e.target.value)
    }
    const descriptionChangeHandler = (e) => {
        setDescription(e.target.value)
    }
    const editMealHandler = () => {
        const editedMeal = {
          title, 
          description, 
          price: +price
        }
        const data = {
          id: meal._id,
          editData: editedMeal
        }
        dispatch(updateMeals(data))
        setIsEditing(false)
}

  return (
    <>
    <MuiModal
        open={open}
        onClose={onClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
          <Box>
            <StyledModalContent>
            <TextField  value={title} onChange={titleChangeHandler} name='title' label='Name' type='text'/>
            <TextField sx={{marginTop:'1rem'}} value={description} onChange={descriptionChangeHandler} name='description' label='Description' type='text'/>
            <TextField sx={{marginTop:'1rem'}} value={price} onChange={priceChangeHandler} name='price' label='Price' type='number'/>
            <ButtonContainer>
                <Button onClick={editMealHandler}>Edit</Button>
                <Button style={{marginLeft: '1rem'}} onClick={onClose}>Close</Button>
            </ButtonContainer>
            </StyledModalContent>
            </Box>
      </MuiModal>
    </>
  )
}

export default EditMealItemForm;

const StyledModalContent = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 20vh;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;

  width: 40rem;
  left: calc(50% -  20rem);

  @keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`
const ButtonContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: flex-end;
`