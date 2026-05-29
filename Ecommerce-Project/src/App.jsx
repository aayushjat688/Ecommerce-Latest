import { Routes,Route } from 'react-router-dom'
import { OrdersPage } from './pages/OrdersPage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { Tracking } from './pages/Tracking';
import { PageNotFound } from './pages/PageNotFound';
import { HomePage } from "./pages/HomePage";
export function App () {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='checkout' element={<CheckoutPage />} />
        <Route path='orders' element={<OrdersPage />} />
        <Route path='tracking' element={<Tracking />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
    
  );
}