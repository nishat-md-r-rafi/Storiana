import React from 'react'
import storeItems from '../../data/items.json'
import {useShoppingCart} from '../../contexts/ShoppingCartContext'
import './cartItem.scss'

type CartItemProps = {
    id : number
    quantity : number
}

export default function CartItem(props: CartItemProps) {

    const {removeFromCart} = useShoppingCart()

  const items = storeItems.find(item => item.id === props.id)
//   console.log("rendered")
  return (
    <div className='cartItemContainer'>
        <div className="information">
            <img src={items?.imgUrl} alt="" className='cartImg'/>
            <div className="quantity">
                <p>{items?.name} x {props?.quantity}</p>
                <p>{items?.price}</p>
            </div>

        </div>
        <div className="price">
            <p>${ items !== undefined && items.price * props.quantity}</p>
            <p onClick={() => removeFromCart(props.id)} className='cross'>remove</p>

        </div>
    </div>
  )
}
