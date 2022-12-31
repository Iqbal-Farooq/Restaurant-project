import classes from './MealsAvailable.module.css'
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
                {DUMMY_MEALS.map((idx)=>{return <li>{idx.name} {idx.description} {idx.price}</li>})}
            </ul>
        </section>
    )
};

export default MealsAvailable;