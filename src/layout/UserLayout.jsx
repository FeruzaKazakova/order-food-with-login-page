import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import styled from "styled-components"
import Basket from "../components/basket/Basket"
import Header from "../components/header/Header"
import Meals from "../components/meals/Meals"
import Summary from "../components/summary/Summary"
import { Snackbar } from "../components/UI/Snackbar"
import { uiActions } from "../store/ui/uiSlice"

export const UserLayout = () => {
  const snackbar = useSelector((state) => state.ui.snackbar)
  const dispatch = useDispatch()
  const [isBasketVisible, setBasketVisible] = useState(false)

  const showBasketHandler = () => {
    setBasketVisible((prevState) => !prevState)
  }

  return (
    <>
    <Header onShowBasket={showBasketHandler} />
        <Content>
          {isBasketVisible && (
            <Basket open={isBasketVisible} onClose={showBasketHandler} />
          )}
          <Snackbar
            isOpen={snackbar.isOpen}
            severity={snackbar.severity}
            message={snackbar.message}
            onClose={() => dispatch(uiActions.closeSnackbar())}
          />
          <Outlet/>
        </Content>
        </>
  )
}

const Content = styled.div`
  margin-top: 101px;
`
