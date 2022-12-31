import classes from './Mealform.module.css';
import Input from '../Ui/Input';

const MealForm=(props)=>
{
return(
    <form className={classes.form}> 
       <Input  label="quantity" input={{id:"amount_"+props.id,type:"number",min:'1',max:'10',step:'1',default:'1'}}       />
        <button>+ Add</button>
    </form>
)
}
export default MealForm;