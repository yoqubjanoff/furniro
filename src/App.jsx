import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import MainLayout from "./layouts/MainLayout/MainLayout"
import Home from "./views/Home/Home"
import Shop from "./views/Shop/Shop"
import Contact from "./views/Contact/Contact"
import Blog from "./views/Blog"
import ReadMore from "./views/ReadMore"
import Comparsion from "./views/Comparsion"



function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>} >
        <Route index element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/read-more" element={<ReadMore/>}/>
        <Route path="/comparsion" element={<Comparsion/>}/>
      </Route>
    )
  )
  return (
    <div>
     <RouterProvider router={routes}/>
    </div>
  )
}

export default App
