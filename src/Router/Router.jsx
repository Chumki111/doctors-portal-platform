import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment";
import Reviews from "../Pages/Reviews/Reviews";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Register/SignUp";


const Router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            }
            ,
            {
                path:'/appointment',
                element:<Appointment/>
            },
            {
                path:'/reviews',
                element:<Reviews/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<SignUp/>
            }


        ]
    }
])

export default Router;