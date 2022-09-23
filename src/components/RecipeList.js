import React from 'react'
import { Outlet } from 'react-router-dom'
import RecipeCard from './RecipeCard'
import './RecipeList.css'

export default function RecipeList({ recipes }) {

    console.log(recipes)

    return (
        <div>
            <h2 className='list-title'>
                Recipes
            </h2>
            <ul className='recipe-list-container'>
                {recipes?.map(recipe => (
                    <RecipeCard key={recipe.id}
                        id={recipe.id}
                        {...recipe.data}
                    />
                ))}
            </ul>
            <Outlet />
        </div>
    )
}
