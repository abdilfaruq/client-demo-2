import React from 'react';
import cartImg from '../../images/icons/cart.png';
import cartGrey from '../../images/icons/cart-gray.png';
import '../../index.css';

const Cart = (props) => {
    return(
        <span className="relative inline-block w-5 h-6 pointer mx-4">
            <img className="self-center" src={props.grey?cartGrey:cartImg} alt="view your shopping cart"/>
            <span className="absolute shadow-inner top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs transform translate-y-1/2 translate-x-1/2 font-bold leading-none bg-yellow black rounded-full">0</span>
        </span>
    )
}

export default Cart;