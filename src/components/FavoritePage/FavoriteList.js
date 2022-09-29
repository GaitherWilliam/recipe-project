import React from 'react'
import FavoriteCard from './FavoriteCard'
import '../RecipeList.css'

export default function FavoriteList({ recipes }) {

    return (
        <div className='recipe-list-root'>
            <h2 className='list-title'>
                Recipes
            </h2>
            <ul className='recipe-list-container'>
                {recipes?.map(recipe => (
                    <FavoriteCard key={recipe.id}
                        id={recipe.id}
                        {...recipe.data}
                    />
                ))}
            </ul>
        </div>
    )
}