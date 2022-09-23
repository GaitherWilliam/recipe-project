import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import RecipeList from './RecipeList'
import { db } from '../lib/init-firebase'
import RecipeOfTheDay from './RecipeOfTheDay/RecipeOfTheDay'
import { filterRecipes } from '../services/recipeFunctions'

export default function HomePage() {

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");

    const filteredRecipes = filterRecipes(recipes, search)

    useEffect(() => {
        getRecipes()
    }, [])

    function getRecipes() {

        const recipeCollectionRef = collection(db, 'recipes')

        getDocs(recipeCollectionRef)
            .then(response => {
                const recipes = response.docs.map(doc => ({
                    data: doc.data(),
                    id: doc.id
                }))
                setRecipes(recipes)
            })
            .catch(error => console.log(error.message))
    }

    return (
        <div>

            {recipes && <RecipeOfTheDay recipe={recipes[2]} />}

            <input
                type="text"
                placeholder="Chicken, garlic, tomato..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <RecipeList recipes={filteredRecipes} />
        </div>
    )
}
