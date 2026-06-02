import { it,expect,describe,vi, beforeEach } from 'vitest';
import { Product } from './Product';
import  userEvent  from '@testing-library/user-event'
import { render,screen } from '@testing-library/react';
import axios from 'axios';

vi.mock('axios');



describe('Product',()=>{

let product ;
  let loadCart;

  beforeEach(()=>{
    product = {
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

  loadCart = vi.fn();
  })

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
  });

  it('adds a product to the cart' , async()=>{
   

  render(<Product product={product} loadCart={loadCart}/>);

  const user = userEvent.setup();
  const addToCartButton = screen.getByTestId('add-to-cart-button');
  await user.click(addToCartButton);

  expect(axios.post).toHaveBeenCalledWith(
    '/api/cart-items',
    {
      productId:  '02e3a47e-dd68-467e-9f71-8bf6f723fdae',
      quantity: 1
    }
  );
  expect(loadCart).toHaveBeenCalled();
  })
})