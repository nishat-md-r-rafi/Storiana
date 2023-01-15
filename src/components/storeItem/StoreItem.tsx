import React from 'react'
import { useShoppingCart } from '../../contexts/ShoppingCartContext'
import './storeItem.scss'

type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

export default function StoreItem({id, name, price, imgUrl}: StoreItemProps) {

  const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
  let quantity = getItemQuantity(id);

  return (
    <div className='itemContainer'>
      <img src={imgUrl} alt="" className='storeImg'/>

      <div className="desc">
        <h5 className="name">{name}</h5>
        <h6 className="price">${price}</h6>
      </div>

      <div className="quantity">
        {quantity == 0? (<button onClick={() => increaseCartQuantity(id)}> + Add to Curt</button>): (<div className="adjustQuantity">
      <div className="adjust">
        <button onClick={() => decreaseCartQuantity(id)} className='btn-control'>-</button>
        <p>{quantity} in Cart</p>
        <button onClick={() => increaseCartQuantity(id)} className='btn-control'>+</button>
      </div>
      <button onClick={() => removeFromCart(id)} className='btn-remove'>Remove</button>
    </div>) }
      </div>

      

    

    </div>
  )
}
