import classes from './Cart.module.css';
import Modal from '../Ui/Modal';
const Cart=props=>{
    const cartitems=(<ul className={classes['cart-items']}>
    {[{id:"c1",name:"CHICKEN-BIRYANI",quantity:2,price:90}].map(item=><li>{item.name}</li>)}
    </ul>);


    return(
    <Modal onClose={props.onClose}>
        {cartitems}
        <div className={classes.total}>
        <span>Total Amount</span>
        <span>Rs- 90</span>
        </div>
           <div className={classes.actions}>
            <button className={classes['buttonalt']} onClick={props.onClose}>Close</button>
             <button className={classes.button}  >Order</button>
           </div>
    </Modal>)

}
export default Cart ;