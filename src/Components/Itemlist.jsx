import React from 'react'
import './Itemlist.css'
import ItemCard from './Itemcard'

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 80,
    imgUrl: "https://tinyurl.com/42xsuupe"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 100,
    imgUrl: "https://tinyurl.com/f9fmu8ms"
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 50,
    imgUrl: "https://tinyurl.com/yxrjr7vu"
  },
  {
    id: 4,
    name: "Backpack",
    price: 400,
    imgUrl: "https://tinyurl.com/y4e3z2fr"
  }
];
function Itemlist() {
  return (
    <>
   <div className="itemcnt">{

    products.map(val => (
      <ItemCard  key={val.id} item={val}/>
      // key-val.id
    ))
}

</div>
    
    </>
    

  )
}

export default Itemlist