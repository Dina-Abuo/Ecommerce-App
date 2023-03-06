import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'

const logo = (
    <div className='logo'>
        <Link to="/" className='link'>
            <h2>
                e<span>Shop</span>.
            </h2>
        </Link>
    </div>
)

const cart = (
    <span className='cart'>
        <Link className='linkCart' to='/car'>
            Cart
            <FaShoppingCart style={{ fontSize: '20PX' }} />
        </Link>
        <span >0</span>
    </span>
)

const Header = () => {


    return (
        <div>
            <header className='header'>
                {logo}
                <nav>
                    <ul >
                        <li><Link className='link' to="/"> Home</Link></li>
                        <li><Link className='link' to="/contact"> Contact Us</Link></li>
                    </ul>
                </nav>
                <div className='hearder-right'>
                    <span className='Links'>
                        <Link className='link' to="/login">  Login</Link>
                        <Link className='link' to="/register">Register</Link>
                        <Link className='link' to="/order-history">  My Orders</Link>
                    </span>
                    {cart}
                </div>
                <div className='menuIcone'>
                    <AiOutlineMenu style={{ fontSize: '28PX' }} />
                    {cart}
                </div>
            </header>

        </div>
    )
}

export default Header

