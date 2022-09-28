import React from 'react'
import RecipeCard from '../RecipeCard'
import './RecipeOfTheDay.css'

export default function ClassicRecipeOfTheDay({ recipe }) {
    return (
        <div> <div className='rotd-root'>
            <h2>Old School Recipe of the Day</h2>
            <RecipeCard id={recipe?.id} {...recipe?.data} />
        </div></div>
    )
}
