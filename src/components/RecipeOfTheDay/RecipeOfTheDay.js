import React from 'react'
import RecipeCard from '../RecipeCard'

export default function RecipeOfTheDay({ recipe }) {


    return (
        <div>
            <h2>Recipe of the Day</h2>
            <RecipeCard id={recipe?.id} {...recipe?.data} />
        </div>
    )
}
