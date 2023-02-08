import React from 'react'

export const Modal = ({onClose,product}) => {
  return (
      <div onClick={onClose}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <p>{product.description}</p>
            <p>{product.createdAt}</p>
            
      </div>
  )
}
