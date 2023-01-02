import classes from './Mealform.module.css';
import Input from '../Ui/Input';
import CartContext from '../../Store/Cart-context';
import { useContext } from 'react';

const MealForm=(props)=>
{
    const ctx=useContext(CartContext)
   const  AddItemToCart=(event)=>{
    event.preventDefault()
    const quantity=document.getElementById("amount_"+props.id).value;
    ctx.addItem({...props.item,quantity:quantity})
     console.log("CHECKING ",ctx.items);
   

   }
return(
    <form className={classes.form}> 
       <Input  label="quantity" input={{id:"amount_"+props.id,type:"number",min:'1',max:'10',step:'1',defaultValue:'1'}}       />
        <button onClick={AddItemToCart}>+ Add</button>
    </form>
)
}
export default MealForm;