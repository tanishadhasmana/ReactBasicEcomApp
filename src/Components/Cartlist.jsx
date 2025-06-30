import React, { useContext } from "react";
import "./Cartlist.css";
import { CartContext } from "./context/Cartcontext";

// this is only to check how item will appear in UI
// const cartitem = [
//   {
//     id: 4,
//     name: "Backpack",
//     price: 400,
//     imgUrl: "https://tinyurl.com/y4e3z2fr",
//     quantity: 2
//   },
//    {
//     id: 2,
//     name: "Smart Watch",
//     price: 100,
//     imgUrl: "https://tinyurl.com/f9fmu8ms",
//     quantity:4
//   }
// ];

function Cartlist() {
    const {cartItems, cartValue, removeFromCart,addQuantity, removeQuantity} = useContext(CartContext)
  const cartitems=[];
  return (
    
      <div className='cartcnt'>
            <h1>Cart : ${cartValue}</h1>
            <div className="itemcnt">
                {cartItems.map(item => {
                    return (
                        <div className='cartitem'>
                            <img src={item.imgUrl} alt={item.name} style={{ height: "100px", width: "100px" }} />
                            <h3>{item.name}</h3>
                            <p>${item.price}</p>
                            <div style={{ marginLeft: "auto" }}>
                                <h3>Quantity</h3>
                                <div>
                                    <button onClick={() => (addQuantity(item))}>+</button>
                                    {item.quantity}
                                    <button onClick={() => (removeQuantity(item))}>-</button>
                                </div>
                                <br />
                                <button onClick={() => (removeFromCart(item))}>Remove</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
  );
}

export default Cartlist;
