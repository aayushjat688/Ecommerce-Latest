import { Header } from '../components/Header';
import './PageNotFound.css';
export function PageNotFound ({cart}) {
  return (
    <>
  <div class="container">
    <Header cart={cart}/>
    <div class="error-code">404</div>
    <div class="error-title">Oops! Page Not Found</div>
    <div class="error-message">
      The page you’re looking for doesn’t exist or has been moved.
    </div>
    <a href="/" class="home-btn">Go Back Home</a>
  </div>

    </>
  );
}