import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import MainLayout from "./layouts/MainLayout/MainLayout"
import Home from "./views/Home/Home"
import Shop from "./views/Shop/Shop"
import Contact from "./views/Contact/Contact"
import Blog from "./views/Blog"
import ReadMore from "./views/ReadMore"
import Comparsion from "./views/Comparsion"
import Cart from "./views/CartPage"
import Checkout from "./views/Checkout"
import View from "./views/View"



function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>} >
        <Route index element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/about" element={<ReadMore/>}/>
        <Route path="/comparsion" element={<Comparsion/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/view" element={<View/>}/>
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
