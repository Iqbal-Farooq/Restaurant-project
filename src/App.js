import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import { useState } from "react";

function App() {
  const [cartstate,setCartstate]=useState(false);

  const ShowCarthandler=()=>{
    setCartstate(true);
  }
   const hideCarthandler=()=>{
    setCartstate(false);
  }
  return (
    <CartProvider>
   {cartstate && <Cart onClose={hideCarthandler}/>} 
    <Header onShowcart={ShowCarthandler}/>
    <main>  <Meals /> </main>
   
    </CartProvider>
  );
}

export default App;

