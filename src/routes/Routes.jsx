import { Route, Routes } from "react-router-dom";
import { UserLayout } from "../layout/UserLayout";
import { SignInPage } from "../pages/user/SignIn";
import { SignUpPage } from "../pages/user/SignUp";
import { AdminLayout } from "../layout/AdminLayout";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
import { UserRoles } from "../constants/common";
import ErrorPage from "../pages/ErrorPage";
import { Orders } from "../pages/admin/Orders";
import AdminMeals from "../pages/admin/AdminMeals";
import { MealsPage } from "../pages/user/Meals";

export const AppRoutes = () => {
  const role = useSelector((state) => state.auth.user.role)
  const isAllowed = (roles) => {
    return roles.includes(role)
  }

  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute
      isAllowed={isAllowed([UserRoles.GUEST, UserRoles.USER])}
      fallBackPath='admin/meals'
      component={UserLayout} />}>
        <Route index element={<ProtectedRoute
      isAllowed={isAllowed([UserRoles.GUEST, UserRoles.USER])}
      fallBackPath='admin/meals'
      component={MealsPage} />} />
        <Route path="signup" element={<ProtectedRoute
      isAllowed={isAllowed([UserRoles.GUEST, UserRoles.USER])}
      fallBackPath={role === UserRoles.ADMIN ? 'admin/meals' : '/'}
      component={SignUpPage} />} />
        <Route path="signin" element={<ProtectedRoute
      isAllowed={isAllowed([UserRoles.GUEST, UserRoles.USER])}
      fallBackPath={role === UserRoles.ADMIN ? 'admin/meals' : '/'}
      component={SignInPage} />} />
      </Route>

      <Route path="/admin" element={<ProtectedRoute
      isAllowed={isAllowed([UserRoles.ADMIN])}
      fallBackPath='/'
      component={AdminLayout} />} >
        <Route path="meals" element={<ProtectedRoute
      isAllowed={isAllowed([UserRoles.ADMIN])}
      fallBackPath='/'
      component={AdminMeals} />} />
        <Route path="orders" element={<ProtectedRoute
      isAllowed={isAllowed([UserRoles.ADMIN])}
      fallBackPath='/'
      component={Orders} />} />
      </Route>
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
  );
};
