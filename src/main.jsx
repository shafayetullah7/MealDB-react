import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Categories, { loadCategories } from './components/Categories'
import CategoryMeals, { loadCategoryMeals } from './components/CategoryMeals'
import SearchedMeals, { searchMeals } from './components/SearchedMeals'
import Modal from './components/Modal'
import { getMealData } from './components/Meal'
import Orders from './components/Orders'
import ErrorPage from './components/ErrorPage'
// import Categories from './components/Categories'

const routes = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    // loader:()=>fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    children:[
      {
        path:"/",
        element:<Categories></Categories>,
        loader:loadCategories,
        children:[
          {
            path:"/category/:strCategory",
            element:<CategoryMeals></CategoryMeals>,
            loader:loadCategoryMeals,
            children:[
              {
                path:":mealId",
                element:<Modal></Modal>,
                loader:getMealData
              }
            ]
          },
          {
            path:"/search/:searchText",
            element:<SearchedMeals></SearchedMeals>,
            loader:searchMeals,
            children:[
              {
                path:":mealId",
                element:<Modal></Modal>,
                loader:getMealData
              }
            ]
          }
        ]
      },
      {
        path:"/orders",
        element:<Orders></Orders>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
