import classes from './Cart.module.css';
import Modal from '../Ui/Modal';
const Cart=props=>{
    const cartitems=(<ul className={classes['cart-items']}>
    {[{id:"c1",name:"Palak",quantity:2,price:90}].map(item=><li>{item.name}</li>)}
    </ul>);


    return(
    <Modal>
        {cartitems}
        <div className={classes.total}>
        <span>Total Amount</span>
        <span> 90</span>
        </div>
           <div className={classes.actions}>
            <button className={classes['buttonalt']}>Close</button>
             <button className={classes.button}  >Order</button>
           </div>
    </Modal>)

}
export default Cart ;