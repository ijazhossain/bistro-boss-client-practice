import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home/Home";
import Order from "../pages/Order/Order";
import Menu from "../pages/Menu/Menu/Menu";
import LogIn from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import DashBoard from "../LayOut/DashBoard";
import Cart from "../pages/DashBoard/Cart/Cart";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import PrivateRoute from "../routes/PrivateRoute";
import ManageItems from "../pages/DashBoard/ManageItems/ManageItems";
import AdminRoute from "../routes/AdminRoute";
import AddItems from "../pages/DashBoard/AddItems/AddItems";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'login',
                element: <LogIn></LogIn>
            },
            {
                path: 'register',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'allUsers',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'manageItem',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: 'addItem',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            }
        ]
    }
])
export default router;