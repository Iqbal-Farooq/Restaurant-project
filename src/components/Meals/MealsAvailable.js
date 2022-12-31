import classes from './MealsAvailable.module.css'
import MealItem from './Mealitem';
import Card from '../Ui/Card';
const DUMMY_MEALS=[
    {
        id:"m1",
        name:"RISTA",
        description:"Mutton-rista",
        price:50
    },
     {
        id:"m2",
        name:"GUSHTAB",
        description:"Mutton-Gushtab",
        price:80
    },
     {
        id:"m3",
        name:"KABAB",
        description:"Mutton-Kabab",
        price:40
    }
]
const MealsAvailable=()=>{
    return(
        <section className={classes.meals}>
            <ul>
            <Card > {DUMMY_MEALS.map((idx)=>{return<MealItem key={idx.id} name={idx.name} description={idx.description} price={idx.price} />})} </Card>
                
            </ul>
        </section>
    )
};

export default MealsAvailable;