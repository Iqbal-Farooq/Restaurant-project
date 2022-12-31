import classes from './MealsAvailable.module.css'
import MealItem from './Mealitem';
import Card from '../Ui/Card';
const DUMMY_MEALS=[
    {
        id:"m1",
        name:"RISTA",
        description:" It is cooked in more spices and has red curry. it is a ball of meat with spices ",
        price:50
    },
     {
        id:"m2",
        name:"GOSHTABA",
        description:" Goshatba is minced mutton cooked in flavorful yogurt gravy and spices",
        price:80
    },
     {
        id:"m3",
        name:"TABAKMAAZ",
        description:"Tabakmaaz or rib cage is considered to be the best dish in all Kashmiri dishes",
        price:100
    },
     {
        id:"m4",
        name:"ROGAN-JOSH",
        description:" Rogan-Josh  is worldwide famous because of its strong and aromatic ingredients.",
        price:100
    }
]
const MealsAvailable=()=>{
    return(
        <section className={classes.meals}>
            <ul>
            <Card > {DUMMY_MEALS.map((idx)=>{return<MealItem key={idx.id} id={idx.id} name={idx.name} description={idx.description} price={idx.price} />})} </Card>
                
            </ul>
        </section>
    )
};

export default MealsAvailable;