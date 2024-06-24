import React from 'react'
import AppRoutes from './components/AppRoutes'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
export const API_URL='https://664db4f9ede9a2b5565481c8.mockapi.io/axios'


function App() {
  const router=createBrowserRouter(AppRoutes)
  return <>
  <RouterProvider router={router}/>
  </>
}

export default App