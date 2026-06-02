import { it,expect,describe,vi } from 'vitest';
import { Product } from './Product';
import { render,screen } from '@testing-library/react';
const product = {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    image: "images/products/blackout-curtains-set-teal.jpg",
    name: "Blackout Curtains Set 42 x 84-Inch - Teal",
    rating: {
      stars: 4.5,
      count: 363
    },
    priceCents: 3099,
    keywords: ["bedroom", "home", "curtains"]
  };
  const loadCart = vi.fn();

describe('Product',()=>{
  it('displays the product details correctly', ()=>{
    render(<Product product={product} loadCart={loadCart}/>);

    expect(
      screen.getByText('Blackout Curtains Set 42 x 84-Inch - Teal')
    ).toBeInTheDocument();

    expect(
      screen.getByText('$30.99')
    ).toBeInTheDocument();

    expect(
      screen.getByTestId('product-image')
    ).toHaveAttribute('src', 'images/products/blackout-curtains-set-teal.jpg')

    expect(
      screen.getByTestId('product-rating-stars')
    ).toHaveAttribute('src' , `images/ratings/rating-45.png`
    )

    expect(
      screen.getByText('363')
    ).toBeInTheDocument();
  })
})