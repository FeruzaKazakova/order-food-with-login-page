import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { AdminHeader } from '../components/header/admin-header/AdminHeader'

export const AdminLayout = () => {
  return (
    <div>
        <AdminHeader />
        <Grid>
            <Outlet/>
        </Grid>
    </div>
  )
}
