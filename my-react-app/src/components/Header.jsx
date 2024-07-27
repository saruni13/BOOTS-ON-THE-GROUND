import React from 'react';

function Header() {
  return (
    <header>
      <h1>My E-Commerce Store</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/products">Products</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
