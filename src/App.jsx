import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import Contact from "./pages/Contact.jsx";

function App() {

  const route =  createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children : [
        {
          index: true,
          element: <HomePage/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/contact',
          element: <Contact/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={route}/>
  )
}

export default App
