import { createContext, useState } from "react";

export const CartContext= createContext(null);

export function CartProvider({children})
{
    const[cartValue, setCartValue] = useState(0);
    // for cart total price
    const [cartItems, setCartItems] = useState([]);

    function addToCart(item){
        const exist = cartItems.some(val => val.id === item.id);

        if(exist){
            alert("item already in cart");
            return;
        }
        const newArr =[...cartItems,{...item, quantity:1}];
        setCartItems(newArr);
        setCartValue(cartValue+item.price);
    }
 
    function removeFromCart(item){
        setCartItems(cartItems.filter(val =>{
            if(val.id != item.id)
                return true;
            return false;
        }))
        setCartValue(cartValue-item.price*item.quantity)
        // price reduce, as kitni chize h*kitna price tha
    }

    function addQuantity(item){
        setCartItems(cartItems.map(val=>{
            if(val.id === item.id)
                return {...val, quantity: item.quantity+1}
            return {...val};
        }));

        setCartValue(cartValue+item.price);
    }
    function removeQuantity(item){
        // check taki quantity 0 tk n jaye
        if(item.quantity===0)
        setCartItems(cartItems.map(val=>{
            if(val.id === item.id)
                return {...val, quantity: item.quantity-1}
            return {...val};
        }));

        setCartValue(cartValue-item.price);
    }

    return(
        <CartContext.Provider value={{cartItems,cartValue,addToCart,removeFromCart, addQuantity, removeQuantity}}>
            {children}
        </CartContext.Provider>
    )
}