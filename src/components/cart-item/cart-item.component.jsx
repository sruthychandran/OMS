import React from 'react';
import { Component } from 'react';
import './cart-item.styles.scss'



class CartItem extends Component{

  state={
    cartItem:[]

  }

componentDidMount= () => {
  fetch('http://localhost:8189/ordermanagement/cart?userId=1')
  .then(response => response.json())
  //.then(cartItem =>console.log(cartItem));

   .then(cartItem => this.setState({cartItem:cartItem}));
}

// placeOrder(){
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({   this })
//   };
//     fetch('http://localhost:8189/ordermanagement/order-details/place-order', requestOptions)
//     .then(response => response.json())
// }

render(){
  return (
  
  //<div className="cart-item">
  <div className="checkout-page">
  <div className="checkout-header">
    <div className="header-block">
      <span>Product</span>
    </div>

    <div className="header-block">
      <span>Description</span>
    </div>

    <div className="header-block">
      <span>Quantity</span>
    </div>

    <div className="header-block">
      <span>Price</span>
    </div>

    <div className="header-block">
      <span>Remove</span>
    </div>
  </div>
  
  {this.state.cartItem.map(cartItem => (

    <div className="item-details"> 
    <span className="name"> {cartItem.itemRating}</span>
    <span className="quantity">
        <h4 key = {cartItem.quantity}> 1{cartItem.quantity} *  ${cartItem.itemPrice}</h4>
        </span>
        </div>
      ))}
  </div>
 
)
}
}

export default CartItem;