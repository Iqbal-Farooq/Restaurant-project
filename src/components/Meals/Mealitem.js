import classes from './Mealitem.module.css';
import MealForm from './MealForm';
const MealItem=(props)=>{
    return <li className={classes.meal}>
        <div><h3>{props.name} </h3></div>
        <div className={classes.description}> {props.description}</div>
        <div className={classes.price}>{`Rs-${props.price} /p`} </div>
        
        <div ><MealForm id={props.id} item={props}/></div>
        {/* {console.log(' From Mealitem',props)} */}
    </li>

}
export default MealItem;