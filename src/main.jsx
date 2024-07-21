import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Header from './assets/components/header/Header.jsx'
import Home from './assets/components/homes/Home.jsx'
import About from './assets/components/about/About.jsx'
import Contact from './assets/components/contact/Contact.jsx'
import Github, { githubInfoLoader } from './assets/components/github/Github.jsx'

const router = createBrowserRouter  ([
   {
     path : '/',
     element : <Layout />,
     children : [
       {
          path : '/',
          element : <Home/>        
       },
       {
        path : "/about",
        element : <About/>
       },
       {
        path : "/contact",
        element : <Contact/>
       },
       {
        path : "/Github",
        element : <Github/>,
        loader : githubInfoLoader
       }

     ]
   }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider  router={router}/>
  </React.StrictMode>
)
