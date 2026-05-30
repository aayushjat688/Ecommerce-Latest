import { Routes,Route } from 'react-router-dom'
import axios from 'axios';
import { OrdersPage } from './pages/OrdersPage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { Tracking } from './pages/Tracking';
import { PageNotFound } from './pages/PageNotFound';
import { HomePage } from "./pages/HomePage";
import { useEffect,useState } from 'react';
export function App () {
    const [cart , setCart] = useState([]);

    useEffect(()=>{
          axios.get('/api/cart-items?expand=product')
    .then((response)=>{
        setCart(response.data);
    })
    },[])

  return (
    <Routes>
        <Route path='/' element={<HomePage cart={cart}/>} />
        <Route path='checkout' element={<CheckoutPage cart={cart}/>} />
        <Route path='orders' element={<OrdersPage cart={cart}/>} />
        <Route path='tracking' element={<Tracking />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
    
  );
}