import classes from'./header.module.css';
import HeaderCartButton from './HeaderCartButton';
import frontImage from '../../assets/front.jpg';
const Header=(props)=>{


    return(
        <>
            <header className={classes.header}>
                <h1><i>Kashmiri-Wazwan</i></h1>
                <HeaderCartButton />
            </header>
            <div  className={classes['main-image']} >
                <img src={frontImage} alt="Delicious Kashmiri food"  />
            </div>
        </>
    )

}
export default Header;
