import React, { useContext, useState } from 'react'
import { Usercontext } from './context/Usercontext';

function Login() {
    // const[defaultname, setdefaultname] =useState(" ");
    const [displayname, setdisplay] = useState("");
    const {login} = useContext(Usercontext);
  return (
    <>
   <div className="logindi">
    <input type="text" value={displayname} onChange={(e) => setdisplay(e.target.value)} />
    <button onClick={() => login(displayname)}>Login</button>
   </div>
      
    </>
  )
}

export default Login
