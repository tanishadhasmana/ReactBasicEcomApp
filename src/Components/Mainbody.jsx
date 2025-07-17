import React from 'react'
import './Mainbody.css'
import Itemlist from './Itemlist'
import Cartlist from './Cartlist'


function Mainbody() {
  return (
    <>
      <div className="main">
        <Itemlist/>
        <Cartlist/>
      </div>
    </>
  )
}

export default Mainbody
