// import React, { useContext } from "react";
// import { CartContext } from "./CartContext";

// const Cart = () => {
//   const { cartItems } = useContext(CartContext);

//   return (
//     <div>
//       <h1>Cart</h1>
//       {cartItems.length > 0 ? (
//         <ul>
//           {cartItems.map((item) => (
//             <li key={item.id}>{item.name}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React from 'react';

import { useCartContext } from './CartContext';

// function Cart({ cartItems }) {
function Cart() {
  const { cartItems } = useCartContext();

  const renderCartItems = () => {
    return cartItems.map((foods, index) => (
      <li key={index}>
        <h3>{foods.title}</h3>
        <p>Price: ${foods.price}</p>
      </li>
    ));
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>{renderCartItems()}</ul>
      )}
    </div>
  );
}

export default Cart;
