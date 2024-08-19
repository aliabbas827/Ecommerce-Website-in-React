import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import './index.css'
import About from './components/About/About.jsx'
import Layout from './Layout.jsx'
import Basket from './components/Shopping-basket/Basket.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path= "" element={<Home />}/>
        <Route path= "About" element={<About/>}/>
        <Route path= "Basket" element={<Basket/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
