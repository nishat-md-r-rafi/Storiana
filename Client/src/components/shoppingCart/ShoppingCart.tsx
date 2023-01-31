import React from 'react'
import { useShoppingCart } from '../../contexts/ShoppingCartContext';
import './shoppingCart.scss'
import items from '../../data/items.json'
import CartItem from '../cartItem/CartItem';

type ShoppingCartProps = {
  isOpen : boolean
}

export function handleClick(){
  const elem = document.getElementById("sideNav");
  if (elem != null) elem.style.display = "block"
  
}
function handleCross(){
  const elem = document.getElementById("sideNav");
  if (elem != null) elem.style.display = "none"
  
}

export default function ShoppingCart({isOpen}: ShoppingCartProps) {

  const {cartItems} = useShoppingCart();  
  return (
    <div className="sideNav" id="sideNav">
    <ul>
        <li className="center user">
            <p onClick={handleCross} id="cross">x</p>
            <p>Hello Rafi </p>
        </li>
        <li>
            {
              cartItems.map((item) =>(
                  <CartItem key={item.id} {...item}/>
              ))
            }
        </li>
    </ul>
</div>
  )
}
