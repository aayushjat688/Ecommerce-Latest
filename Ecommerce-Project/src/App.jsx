import { Routes,Route } from 'react-router-dom'
import axios from 'axios';
import { OrdersPage } from './pages/orders/OrdersPage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { Tracking } from './pages/Tracking';
import { PageNotFound } from './pages/PageNotFound';
import { HomePage } from "./pages/home/HomePage";
import { useEffect,useState } from 'react';
export function App () {
    const [cart , setCart] = useState([]);

  const loadCart = async () => {
         const response = await axios.get('/api/cart-items?expand=product');
         setCart(response.data)
        };
// await loadCart();
    useEffect(()=>{
         loadCart();
    },[])

  return (
    <Routes>
        <Route path='/' element={<HomePage cart={cart} loadCart={loadCart}/>} />
        <Route path='checkout' element={<CheckoutPage cart={cart} loadCart={loadCart}/>} />
        <Route path='orders' element={<OrdersPage cart={cart}/>} />
        <Route path='tracking' element={<Tracking cart={cart}/>} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
    
  );
}