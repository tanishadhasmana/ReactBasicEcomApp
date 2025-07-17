import React, { useContext } from "react";
import './Navbar.css';
import { Usercontext } from "./context/Usercontext";
function Navbar() {
  
  const { username } = useContext(Usercontext);
  return (
    <>
    <div className="navitems">
        <div>Home </div>
        <div>About</div>
        <div>Contact</div>
        <div className='box' id='namebox'>{username ? username : "User"}</div>
    </div>




      
    </>
  )
}

export default Navbar
