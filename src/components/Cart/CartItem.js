import classes from './CartItem.module.css'
const CartItem=(props)=>{
    // let quant=Number(props.quantity)
    return(
        <li className={classes['cart-item']}>
            <div><h2>{props.name}</h2>
            <div className={classes.summery}>
             {/* <span className={classes.pri}>{props.id}</span> */}
                <span className={classes.price}>{props.price}</span>
                <span className={classes.amount}>x{props.quantity}</span>
                <span className={classes.amou}>Rs-{props.quantity*props.price}</span>
            </div>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    )
}
export default CartItem