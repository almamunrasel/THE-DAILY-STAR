import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AuthLayout from "../Layout/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";

const router= createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>

      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ()=>fetch("/news.json"),
      }
    ]


  },
  {
    path:'/auth',
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path: '/auth/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/auth/register',
        element: <RegisterPage></RegisterPage>,
      }
    ]


  },
  {
    path:'/news-details/:id',
    element: <PrivateRoute> <NewsDetails></NewsDetails></PrivateRoute>,
    loader: ()=> fetch("/news.json"),


  },
  {
    path:'/*',
    element: <h2>error 404</h2>


  },

])

export default router;