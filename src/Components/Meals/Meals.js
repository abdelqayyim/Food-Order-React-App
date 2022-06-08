import React, { Fragment} from 'react'; 
import './Meals.css';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const Meals = (props)=>{
    return (
        <Fragment>
            <MealsSummary></MealsSummary>
            <AvailableMeals></AvailableMeals>
        </Fragment>
    )
};

export default Meals;