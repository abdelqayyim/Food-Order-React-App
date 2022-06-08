import React, { Fragment } from 'react'; 
import './Header.css';
import mealsImage from '../../Assets/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props)=>{
    return (
        <Fragment>
            <header className='header'>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
            </header>
            <div className='main-image'>
                <img src={mealsImage} alt='Table full of delicious food!'>
                </img>
            </div>
        </Fragment>
    )

};

export default Header;