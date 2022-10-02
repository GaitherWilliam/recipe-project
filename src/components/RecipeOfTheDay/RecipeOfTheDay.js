import React from 'react';
import RecipeCard from '../RecipeCard';
import './RecipeOfTheDay.css';

export default function RecipeOfTheDay({ recipe }) {
    return (
        <div className='rotd-root'>
            <h2>Recipe of the Day</h2>
            <RecipeCard id={recipe?.id} {...recipe?.data} />
        </div>
    )
}