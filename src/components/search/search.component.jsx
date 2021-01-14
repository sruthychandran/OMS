import React from 'react';
import { Component } from 'react';




class search extends Component{

  state={
    search:{}

  }

componentDidMount= () => {
  fetch('http://localhost:8189/ordermanagement/platformsearch')
  .then(response => response.json())
  .then(cartItem =>console.log(cartItem));

  // .then(cartItem => this.setState({cartItem:cartItem}));
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

    <div>
    new
    </div>
  )
}
}

export default search;