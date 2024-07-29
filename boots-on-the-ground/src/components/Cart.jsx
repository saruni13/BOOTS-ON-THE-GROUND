import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart, updateQuantity}) => {
    // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price*item.item_quantity , 0);
  
  // Calculate tax fee (16%)
  const taxFee = totalPrice * 0.16;

  // Function to handle increasing item quantity
  const increaseQuantity = (item) => {
    updateQuantity(item, item.item_quantity + 1);
  };

  // Function to handle decreasing item quantity
  const decreaseQuantity = (item) => {
    if (item.item_quantity > 1) {
      updateQuantity(item, item.item_quantity - 1);
    }
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className='product'>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.productPicture} alt={item.productName} />
            <div className="item-details">
              <h3>{item.productName}</h3>
              <p>{item.category}</p>
              <p>{item.description}</p>
               <p>
                Item quantity :{' '}
                <button className='update-button' onClick={() => decreaseQuantity(item)}>-</button>
                {item.item_quantity}
                <button className = 'update-button'onClick={() => increaseQuantity(item)}>+</button>
              </p>
              <p>Price: <strong>Ksh {item.price} × {item.item_quantity} = {item.price * item.item_quantity}</strong> </p>
              <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
            </div>
          </div>
        ))}
      </div>
      </div>
       <div className="total-price">
       <h4>Total Price: Ksh {totalPrice}</h4>
       <h4>Tax Fee : Ksh {taxFee}</h4>
       <h4>Total Amount to be paid : Ksh {taxFee + totalPrice}</h4>
       </div>
      <Link to = "/checkout"><button id="checkout" >Proceed to Checkout</button> </Link>
    </div>
  );
};

export default Cart;