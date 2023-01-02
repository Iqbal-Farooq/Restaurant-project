import classes from './Cart.module.css';
import Modal from '../Ui/Modal';
import CartContext from '../../Store/Cart-context';
import { useContext } from 'react';
import CartItem from './CartItem';

import { useReducer } from "react";





const Cart=props=>{
    const cartCntx=useContext(CartContext)
    
    const CartItemRemovehandler=id=>{cartCntx.removeItem(id)};
    const CartItemAddHandler=item=>{cartCntx.addItem({...item,quantity:1})};

    const cartitems=(<ul className={classes['cart-items']}>
    {cartCntx.items.map((item)=><CartItem key={item.id} id={item.id} name={item.name} quantity={Number(item.quantity)} price={item.price} 
    onRemove={CartItemRemovehandler.bind(null,item.id)} onAdd={ CartItemAddHandler.bind(null,item)} />)}</ul>);


    //  const Amount=(<ul className={classes['cart-items']}>
    // {cartCntx.items.map(item=><li>   {price+=item.price * item.quantity}</li>)}
    // </ul>);

    const Am=cartCntx.totalAmount
    const hasItems=cartCntx.items.length>0;


    return(
    <Modal onClose={props.onClose}>
        {cartitems}
        
        <div className={classes.total}>
        <span>Total Amount</span>
        
        <span>{`Rs-${Am}`} </span>
        </div>
           <div className={classes.actions}>
            <button className={classes['buttonalt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button}  >Order</button>}

           </div>
    </Modal>)

}
export default Cart ;