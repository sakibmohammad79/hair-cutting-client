import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AllServices from "../pages/AllServices/AllServices";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AllUser from "../pages/Dashboard/AllUser/AllUser";
import ManageServices from "../pages/Dashboard/ManageServices/ManageServices";
import ServiceOrderList from "../pages/Dashboard/ServiceOrderList/ServiceOrderList";
import AddService from "../pages/Dashboard/AddService/AddService";
import AddReview from "../pages/Dashboard/AddReview/AddReview";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AdminRoute from "./AdminRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/allservices',
        element: <PrivateRoute><AllServices></AllServices></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ],
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: '/dashboard/alluser',
        element: <AllUser></AllUser>
      },
      {
        path: '/dashboard/manageservices',
        element: <ManageServices></ManageServices>
      },
      {
        path: '/dashboard/orderlist',
        element: <ServiceOrderList></ServiceOrderList>
      },
      {
        path: '/dashboard/addservice',
        element: <AddService></AddService>
      },
      {
        path: '/dashboard/addreview',
        element: <AddReview></AddReview>
      },
      {
        path: '/dashboard/mycart',
        element: <MyCart></MyCart>
      }
    ]
  }
]);
