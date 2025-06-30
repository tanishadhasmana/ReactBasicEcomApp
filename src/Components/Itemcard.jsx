import React, { useContext } from 'react'
import './Itemcard.css'
import { CartContext } from './context/Cartcontext'

function Itemcard({item}) {
  const {addToCart} = useContext(CartContext)
  return (
    <>
    {/* key={item.id} div k andr se remove */}
        <div  className="product">
            <img src={item.imgUrl} alt={item.name} style={{ height: "100px", width: "100px" }} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>

            {/* <button onClick={() => dispatcher(addToCart(item))}>Add to Cart</button> */}
            <button onClick={() => addToCart(item)}>add to cart</button>
        </div>
    </>
  )
}

export default Itemcard
