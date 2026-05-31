import { Link } from "react-router";
import { Header } from "../components/Header";
import axios from 'axios';
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Tracking.css'
export function Tracking ({cart}) {
  const [order , setOrder] = useState(null);
  const {orderId , productId} = useParams();
  // console.log(param);

  useEffect(()=>{
    const fetchTrackingData = async ()=>{
    const Response = await axios.get(`/api/orders/${orderId}?expand=products`)
    setOrder(Response.data);
  }
  fetchTrackingData();
  },[orderId])
  if(!order) return null;
// console.log(order);
  const orderProduct = order.products.find((orderProduct) =>{
    // console.log(orderProduct.product);
    
    return orderProduct.productId === productId;
  })
  const totalDeliveryTimeMs = orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
  const timePassedMs = dayjs().valueOf() - order.orderTimeMs;

  let percentOfBar = (timePassedMs/totalDeliveryTimeMs)*100;
 let timeOfDeliver = 'Arriving on ';
let isPreparing = false;
let isShipped = false;
let isDelivered = false;
if(percentOfBar <= 33){
  isPreparing=true;
}else if(percentOfBar > 33 && percentOfBar<100){
  isShipped=true;
}else{
 percentOfBar=100;
     isDelivered = true;
     timeOfDeliver = 'Delivered on '
}
 

   
  // console.log(percentOfBar);
  return (
    <>
      <title>Tracking</title>

    <Header cart={cart}/>

    <div className="tracking-page">
      <div className="order-tracking">
        <Link className="back-to-orders-link link-primary" to="/orders">
          View all orders
        </Link>

        <div className="delivery-date">
          
          
           {timeOfDeliver + dayjs(orderProduct.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
         
        </div>

        <div className="product-info">
          {orderProduct.product.name}
          
        </div>

        <div className="product-info">
          Quantity: {orderProduct.quantity}
        </div>

        <img className="product-image" src={orderProduct.product.image} />

        <div className="progress-labels-container">
          <div className={`progress-label ${isPreparing && 'current-status'}`}>
            Preparing
          </div>
          <div className={`progress-label ${isShipped && 'current-status'}`}>
            Shipped
          </div>
          <div className={`progress-label ${isDelivered && 'current-status'}`}>
            Delivered
          </div>
        </div>

        <div className="progress-bar-container">
          <div style={{width: `${percentOfBar}%`}} className="progress-bar">

          </div>
        </div>
      </div>
    </div>
    </>
  );
}
