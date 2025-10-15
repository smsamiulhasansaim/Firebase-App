import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Page404 from "../Error/Page404/Page404";
 export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Page404></Page404>,
    children:[
        {
            index: true,
            path:'/',
            Component:Home
        }
    ]
  },
]);
