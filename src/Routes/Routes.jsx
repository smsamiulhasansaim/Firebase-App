import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Page404 from "../Error/Page404/Page404";
import { Component } from "react";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Logout from "../Components/Logout/Logout";
 export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Page404></Page404>,
    children:[
        {
            index: true,
            path:'/',
            Component:Home,
        },
        {
          path: '/Login',
          Component: Login
        },
        {
          path:'/Register',
          Component: Register
        },
        {
          path: '/Logout',
          Component: Logout
        }
    ]
  },
]);
