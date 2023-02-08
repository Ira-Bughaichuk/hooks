
import React from 'react'

export const ProductList = ({items, onClick}) => {
  return (
      <ul>
          {items.map((item) => {
              const { name, price, id } = item
              return <li key={id} onClick={()=>onClick(item)} >
                  <p>{name}: {price}</p>
                  
              </li>
          })}
    </ul>
  )
}

