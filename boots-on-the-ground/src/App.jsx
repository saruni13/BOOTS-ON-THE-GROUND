import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductCollection from './components/ProductCollection';
import Header from './components/Header';
import Cart from './components/Cart';
import Contact from './pages/Contact';
import About from './pages/About';
import SearchBar from './components/SearchBar'
import Feedback from './pages/Feedback'
import './App.css';
import Checkout from './components/Checkout';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/catalogue')
      .then((r) => r.json())
      .then((data) => {
        setItems(data);
        setFilteredItems(data); 
      });
  }, []);

  // Function to add item to cart
  const addToCart = (item) => {
    const updatedItems = items.map((product) => {
      if (product.id === item.id) {
        // Decrease quantity in db.json
        if (product.quantity > 0) {
          product.quantity -= 1;
        } else {
          alert('Out of stock');
          return product;
        }}})

    // Check if item already exists in cart
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      
  // If item already exists, show alert 
      const updatedCartItems = [...cartItems];
      alert('Item already added to cart!')
      setCartItems(updatedCartItems);
    } else {
      if (item.quantity > 0 ) { 
        alert("Added to Cart Succesfully")
      } else{
        alert("Out of stock")
      }
      // If item doesn't exist, add it to cart with quantity 1
      setCartItems([...cartItems, { ...item, item_quantity: 1 }]);


    }

  };

  // Function to update item quantity in cart
  const updateQuantity = (item, item_quantity) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, item_quantity: item_quantity };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  };

  // Function to remove item from cart
  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((i) => i.id !== item.id));
  };

  // Function to handle search
  const handleSearch = (searchTerm) => {
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <Router>
      <div>
      <h2 id="slogan">Shop Smart, Shop Bora ; just a click away with CARTBORA!</h2>
        <Header cartItems={cartItems} />
        <Routes>
        <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={<ProductCollection items={filteredItems} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity = {updateQuantity}/>}
          />
          <Route
            path="/checkout"
            element={<Checkout cartItems={cartItems} />}
          />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;