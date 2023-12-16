import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import MainLayout from "./layouts/MainLayout/MainLayout"
import Home from "./views/Home/Home"



function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>} >
        <Route index element={<Home/>}/>
      </Route>,
    )
  )

  return (
    <div>
     <RouterProvider router={routes}/>
    </div>
  )
}

export default App
