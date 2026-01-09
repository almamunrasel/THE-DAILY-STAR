import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

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
    element: <h2>Authetication  Layout</h2>


  },
  {
    path:'/news',
    element: <h2>news Layout</h2>


  },
  {
    path:'/*',
    element: <h2>error 404</h2>


  },

])

export default router;