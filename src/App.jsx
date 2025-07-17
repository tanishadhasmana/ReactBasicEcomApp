import React, { useContext } from 'react'
import Navbar from './Components/Navbar'
import Mainbody from './Components/Mainbody'
import Itemlist from './Components/Itemlist'
import Cartlist from './Components/Cartlist'
import Footer from './Components/Footer'
import Login from './Components/Login'
import { Usercontext } from './Components/context/Usercontext';

function App() {
  // hume iske andr ab context se value lani h utha k usename vgera
  const {username} = useContext(Usercontext)
  return (
    <>

    <Navbar/>
   {username ?  <Mainbody/> : <Login/>}
    <Footer/>
      
    </>
  )
}

export default App
