import classes from './Mealitem.module.css';
import MealForm from './MealForm';
const MealItem=(props)=>{
    return <li className={classes.meal}>
        <div><h3>{props.name} </h3></div>
        <div className={classes.description}> {props.description}</div>
        <div className={classes.price}>{`Rs-${props.price}`} </div>
        
        <div ><MealForm /></div>
    </li>

}
export default MealItem;