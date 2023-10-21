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
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/dashboard/alluser',
        element: <AllUser></AllUser>
      },
      {
        path: '/dashboard/manageservices',
        element: <ManageServices></ManageServices>
      }
    ]
  }
]);
