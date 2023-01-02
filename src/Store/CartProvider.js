import CartContext from "./Cart-context";
import { useReducer } from "react";

const initialState={
    items:[],
    totalAmount:0
}
const cartReducer=(state,action)=>{
    if(action.type==="ADD"){
        
        const updatedAmount=state.totalAmount+action.item.price*action.item.quantity;
        const existigCartIndex=state.items.findIndex(item=>item.id===action.item.id);
        
        const existingItem=state.items[existigCartIndex];
      

       
        let updatedItems;

        if(existingItem){
            // console.log("Checking prevquantity ",existingItem.quantity)
            // console.log("Checking quantity ",action.item.quantity)
            // console.log("Checking New  quantity ",Number(action.item.quantity)+Number(existingItem.quantity))
            const updatedItem= {...existingItem,quantity:Number(existingItem.quantity)+Number(action.item.quantity)}
            updatedItems=[...state.items];
            updatedItems[existigCartIndex]=updatedItem;
           
        }
        else{
            
            updatedItems=state.items.concat(action.item)
            
        }
        
          return {
            items:updatedItems,
            totalAmount:updatedAmount,
          }
}
    }
  

const CartProvider=(props)=>{
    const[CartState,SetCartState]=useReducer(cartReducer,initialState)
    
  
    const addItemToCartHandler=(item)=>{
        SetCartState({type:"ADD",item:item})
    }

    const removeItemFromCartHandler=(id)=>{ 
         SetCartState({type:"REMOVE",id:id})
    }

    const cartCntxt={
        items:CartState.items,
         totalAmount:CartState.totalAmount,
       addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler,
  
 }
    return (
        <CartContext.Provider value={cartCntxt}>
        {/* {console.log("Inside cart context",cartCntxt)} */}
        {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;