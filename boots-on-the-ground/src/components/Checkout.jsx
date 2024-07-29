import React from 'react';

const Checkout = ({ cartItems }) => {
  // Calculate total price for each item and overall total price
  const totalItemsPrice = cartItems.map(item => item.price * item.item_quantity).reduce((acc, cur) => acc + cur, 0);
  // Calculate tax
  const taxFee = totalItemsPrice * 0.16;

  //total plus the tax
 const total = taxFee + totalItemsPrice
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <table className='checkout-table'>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.productName}</td>
              <td>{item.description}</td>
              <td>{item.item_quantity}</td>
              <td>Ksh {item.price * item.item_quantity}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Value Added Tax:</td>
            <td>Ksh {taxFee}</td>
          </tr>
          <tr>
            <td colSpan="3">Total:</td>
            <td>Ksh {total}</td>
          </tr>
        </tfoot>
      </table>
      <button className='pay-button' onClick={() => alert('Payment successful')}>Pay</button>
    </div>
  );
};

export default Checkout;