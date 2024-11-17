import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import Category_News from "../Components/ALL-Category/Category_News";
import Auth_Layout from "../Layout/Auth_Layout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsCard from "../Components/News-Home/News_Card";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter  ([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children: [
                    {
                        path: '/',
                        element: <Navigate to={'/category/01'}></Navigate>
                    },
                    { 
                        path: '/home',
                        element: <Navigate to={'/category/01'}></Navigate>
                    },

                    {
                        path: '/category/:id',
                        element: <Category_News></Category_News>,
                        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
                    },
                ]
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: 'career',
                element: <Career></Career>
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
            },
            {
                path: 'auth',
                element: <Auth_Layout></Auth_Layout>,
                children: [
                    {
                        path: '/auth/login',
                        element: <Login></Login>
                    },
                    {
                        path: '/auth/register',
                        element: <Register></Register>
                    }
                ]
            }
        ]
    }

])

export default router