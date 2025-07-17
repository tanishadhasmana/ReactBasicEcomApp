import { useState,createContext } from "react";
export const Usercontext = createContext(null);
export function Userprovider({children}){
    const[username,setUsername]=useState(null);
    function login(name){
        setUsername(name);
    }
    function logout(name){
        setUsername(null);
    }
    return (
        <Usercontext.Provider value={{username,login,logout}}>
        {children}
        </Usercontext.Provider>
    );
}