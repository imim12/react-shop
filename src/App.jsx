
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Hompage from './pages/Hompage'
import DetailPage from './pages/DetailPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import Register from './pages/RegisterPage'
import Order from './pages/OrderPAge'
import NotFoundPage from './pages/NotFoundPage'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Hompage/>}/>
          <Route path="product/:id" element={<DetailPage/>}/>
          <Route path="cart" element={<CartPage/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="order" element={<Order/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
