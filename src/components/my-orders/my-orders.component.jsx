import { Component } from 'react';
import React from 'react'
import './my-orders.styles.scss';
import orderService from "../../service/orderService.js";

class MyOrder extends Component{

  state={
    orderDetails:[]

  }

 componentDidMount= () => {
  {this.getOrderDetail()}
//   fetch('http://localhost:8189/ordermanagement/order-details/view-order?orderId=30')
//   .then(response => response.json())
//   .then(orderDetails => this.setState({orderDetails:orderDetails}));

 }

getOrderDetail(){

orderService.get()
.then(response => response.data)
.then(orderDetails => this.setState({orderDetails:orderDetails}));

}

render(){
  return (
  
    <div className="checkout-page">
    <div className="checkout-header">
      
      <div className="header-block">
        <span>Product</span>
      </div>

      <div className="header-block">
        <span>Quantity</span>
      </div>

      <div className="header-block">
        <span>Price</span>
      </div>
      
    </div>
   

    
    
    {this.state.orderDetails.map(orderDetails => (
      <div className="checkout-item">
      <div className="image-container">
      <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' alt="item" />
      </div>
 
    
        <span className="quantity">
        <h6 key = {orderDetails.totalQuantity}> {orderDetails.totalQuantity}</h6>
   
      </span>
    
      <span className="price">  
      <h6 key = {orderDetails.itemPrice}> {orderDetails.itemPrice}</h6>
      </span>
      </div>
      ))}
    
      
    
  </div>
  
  )
}  

}

export default MyOrder;