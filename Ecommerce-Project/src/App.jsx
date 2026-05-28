import { Routes,Route } from 'react-router-dom'

import { HomePage } from "./pages/HomePage";
export function App () {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='checkout' element={<div>Test Checkout</div>} />
    </Routes>
    
  );
}