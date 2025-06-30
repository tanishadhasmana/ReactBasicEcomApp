import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './Components/context/Cartcontext.jsx'

createRoot(document.getElementById('root')).render(
  <CartProvider>
 <App />
  </CartProvider>
   
  
    
)
