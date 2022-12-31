import classes from './Mealform.module.css';
import Input from '../Ui/Input';

const MealForm=()=>
{
return(
    <form className={classes.form}> 
       <Input  label="quantity" input={{Id:"amount",type:"number",min:'1',max:'5',step:'1',default:"1"}}       />
        <button>+ Add</button>
    </form>
)
}
export default MealForm;