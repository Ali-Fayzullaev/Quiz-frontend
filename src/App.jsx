//rrd imports
import { createBrowserRouter, RouterProvider } from "react-router-dom"

//Layout imports
import MainLayout from "./layout/MainLayout"

// imports pages
import ErrorPage from "./pages/ErrorPage"

import Home from "./pages/Home"
import Quiz from "./pages/Quiz"



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/quiz/:title",
          element: <Quiz />,  
        }
      ]

    }
  ])

  
  return <RouterProvider router={router} />
}



export default App