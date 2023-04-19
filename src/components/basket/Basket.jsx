import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Modal from '../UI/Modal'
import BasketItem from './BasketItem'
import TotalAmount from './TotalAmount'
import { uiActions } from '../../store/ui/uiSlice'
import { deleteBasketItem, getBasket, updateBasketItem } from '../../store/basket/basketThunk'
import { postOrders } from '../../store/orders/ordersThunk'

const Basket = ({ onClose, open }) => {
  const items = useSelector((state) => state.basket.items)
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return items.reduce((sum, { price, amount }) => sum + amount * price, 0)
  }

  const decreaseAmount = (id, amount) => {
    if (amount > 1) {
      dispatch(updateBasketItem({ amount: amount - 1, id }))
    } else {
      dispatch(deleteBasketItem(id))
    }
  }
  const increaseAmount = (id, amount) => {
    dispatch(updateBasketItem({ amount: amount + 1, id }))
  }

  const price = {
    totalPrice: getTotalPrice()
  }

  const orderSubmitHandler = async () => {
    try {
      await dispatch(postOrders(price)).unwrap()
      dispatch(getBasket())

      dispatch(
        uiActions.showSnackbar({
          severity: 'success',
          message: 'Order completed successfully!',
        })
      )
    } catch (error) {
      dispatch(
        uiActions.showSnackbar({
          severity: 'error',
          message: 'Failed. Try again later',
        })
      )
    } finally {
      onClose()
    }
  }

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Content>
          {items.length ? (
            <FixedHeightContainer>
              {items.map((item) => {
                return (
                  <BasketItem
                    key={item._id}
                    increaseAmount={() => increaseAmount(item._id, item.amount)}
                    decreaseAmount={() => decreaseAmount(item._id, item.amount)}
                    title={item.title}
                    price={item.price}
                    amount={item.amount}
                  />
                )
              })}
            </FixedHeightContainer>
          ) : null}
          <TotalAmount
            price={getTotalPrice()}
            onClose={onClose}
            onOrder={orderSubmitHandler}
          />
        </Content>
      </Modal>
    </>
  )
}

export default Basket

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem 1.5rem;
`
const FixedHeightContainer = styled.div`
  max-height: 228px;
  overflow-y: scroll;
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #f7f7f7;
  }

  &::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #a8a8a8;
  }
`
