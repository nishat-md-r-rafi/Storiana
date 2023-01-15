import React from 'react'
import StoreItem from '../components/storeItem/StoreItem'
import items from '../data/items.json'

export default function () {
  return (
    <div className='store' style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
      {
        items.map(item => (
          <StoreItem key={item.id} {...item} />
        ))
      }
    </div>
  )
}
