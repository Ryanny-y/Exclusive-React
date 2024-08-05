import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/pages/Home.jsx'
import Contact from './components/pages/Contact.jsx'
import About from './components/pages/About.jsx'
import SignUp from './components/pages/SignUp.jsx'
import NotFound from './components/pages/NotFound.jsx'
import './index.css'
import './styles/sliderStyles.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// SWIPER
import { register } from 'swiper/element/bundle';
register();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: "/*",
        element: <NotFound />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
