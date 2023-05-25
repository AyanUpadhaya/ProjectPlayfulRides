import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Profile from "../Pages/Profile";
import Private from "./PrivateRoute";
import Blogs from "../Pages/Blogs";
import AddToy from "../Pages/AddToy";
import AllToys from "../Pages/AllToys";
import ProductDetails from "../Pages/ProductDetails";
import MyToys from "../Pages/MyToys";
import Update from "../Pages/Update";
import NotFound from "../Pages/NotFound";

export const rounter = createBrowserRouter([{
    path:'/',
    element:<MainLayout></MainLayout>,
    errorElement:<NotFound></NotFound>,
    children:[{
        path:'/',
        element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/profile',
            element:<Private><Profile></Profile></Private>
        },
        {
            path:'/blogs',
            element:<Blogs></Blogs>
        },
        {
            path:'/add_toy',
            element:<Private><AddToy></AddToy></Private>
        },
        {
            path:'/all_toys',
            element:<AllToys></AllToys>,
        },
        {
            path:'/all_toys/:id',
            element:<Private><ProductDetails></ProductDetails></Private>,
            loader:({params})=>fetch(`https://playfulrides-server.vercel.app/api/toys/${params.id}`)
        },
        {
            path:'/mytoys',
            element:<MyToys></MyToys>,
        },
        {
            path:'/update/:id',
            element:<Update></Update>,
            loader:({params})=>fetch(`https://playfulrides-server.vercel.app/api/toys/${params.id}`)
        }
    ]
}])

