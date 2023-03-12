import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getAllOrders } from '../../store/orders/ordersThunk';

export const AdminOrders = () => {
  const dispatch = useDispatch()
  const allMeals = useSelector((state) => state.orders.allMeals)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  useEffect(() => {
    dispatch(getAllOrders())
  }, [dispatch])

  const handleChangePage = (newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ marginTop:'50px',marginLeft:'70px',width: '90%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Meals</TableCell>
              <TableCell>Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allMeals
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                    <TableCell><h2>{row.user.name}</h2></TableCell>
                    <TableCell align='right' scope='row'>
                      <Ul>
                        {row.items.map((item) => (
                          <Li>
                            <h3>{item.title}</h3>
                            <h3 style={{marginLeft:'13px'}}>${item.price}</h3>
                            <h4 style={{marginLeft:'16px'}}> x{item.amount}</h4>
                          </Li>
                        ))}
                      </Ul>
                    </TableCell>
                    <TableCell>${row.totalPrice}</TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={allMeals.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

const Ul = styled.ul`
list-style: none;
`
const Li = styled.li`
display: flex;
justify-content: center;
align-items: center;
`