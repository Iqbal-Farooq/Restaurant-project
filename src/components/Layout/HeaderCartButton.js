import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import CartContext from "../../Store/Cart-context";
import { useContext } from "react";

const HeaderCartButton=(props)=>{
    const ctx=useContext(CartContext);

    const quantity=ctx.items.reduce((currentnum,item)=>{ return currentnum+Number(item.quantity)},0)

    // let quantity=0;
    // ctx.items.forEach(item=>{quantity=quantity+Number(item.quantity)})

    return (
        <>
            <button className={classes.button} onClick={props.onClick} >
                <span className={classes.icon}><CartIcon /> </span>
                <span>your Cart </span>
                 
                <span className={classes.badge}> {quantity}</span>
            </button>
        </>
    )

}
export default HeaderCartButton;