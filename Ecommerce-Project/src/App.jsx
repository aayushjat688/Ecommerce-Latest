import { Routes,Route } from 'react-router-dom'
import { OrdersPage } from './pages/OrdersPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { HomePage } from "./pages/HomePage";
export function App () {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='checkout' element={<CheckoutPage />} />
        <Route path='orders' element={<OrdersPage />} />
    </Routes>
    
  );
}