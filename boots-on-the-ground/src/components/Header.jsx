import React from 'react';
import { useState, useEffect } from 'react';
import Contact from "../pages/Contact"
import AboutUs from '../pages/About';
import { Link } from 'react-router-dom';
import { ShoppingCartSimple, Storefront} from '@phosphor-icons/react';


const Header = ({ cartItems }) => {
    const [cartCount, setCartCount] = useState(0);

    // Update cart count whenever cartItems change
  useEffect(() => {
    setCartCount(cartItems.length);
  }, [cartItems]);
    return (
        <div className="header">
            <div className="header-left">
                <h1>
                <ShoppingCartSimple color='white' weight='duotone' size={40}/> CARTBORA
                </h1>
                {/* <h1><img src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" alt="Cart Icon" />CARTBORA</h1> */}
            </div>
            <div className="header-right">
                <ul>
                    <Link to = '/'><li>HOME</li></Link>
                    <Link to = '/contact'><li>CONTACT US</li></Link>
                    <Link to = '/about'><li>ABOUT</li></Link>
                    <Link to = '/feedback'><li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-240q-17 0-28.5-11.5T240-280v-80h520v-360h80q17 0 28.5 11.5T880-680v600L720-240H280ZM80-280v-560q0-17 11.5-28.5T120-880h520q17 0 28.5 11.5T680-840v360q0 17-11.5 28.5T640-440H240L80-280Zm520-240v-280H160v280h440Zm-440 0v-280 280Z"/></svg></li></Link>
                    <Link to = '/cart'>
                    <a href=""><li><ShoppingCartSimple size={30} />
                    {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}</li></a>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Header;