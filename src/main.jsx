import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import './index.css'
import About from './components/About/About.jsx'
import Layout from './Layout.jsx'
import Basket from './components/Shopping-basket/Basket.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import Login from './components/Login/Login.jsx'
import { auth } from './firebase/firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes.jsx';
import { UserProvider } from './context/UserProvider';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path= "/sign-up" element={<SignUp />}/>
       <Route path= "/login" element={<Login />}/>
       {/* <Route path= "" element={<Home />}/> */}
        <Route path= "" element={<ProtectedRoutes user={user}><Home /> </ProtectedRoutes>}/>
        <Route path= "About" element={<ProtectedRoutes user={user}><About/></ProtectedRoutes>}/>
        <Route path= "Basket" element={<ProtectedRoutes user={user}><Basket/></ProtectedRoutes>}/>
    </Route>
  )
)

return (
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
