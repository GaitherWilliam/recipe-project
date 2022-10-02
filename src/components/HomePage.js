import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import RecipeList from './RecipeList';
import { db } from '../lib/init-firebase';
import RecipeOfTheDay from './RecipeOfTheDay/RecipeOfTheDay';
import { filterRecipes } from '../services/recipeFunctions';
import './Clock.css';
import './HomePage.css';
import ClassicRecipeOfTheDay from './RecipeOfTheDay/ClassicRecipeOfTheDay';
import { Outlet } from 'react-router-dom';

export default function HomePage() {

    const [recipes, setRecipes] = useState([]);

    const [search, setSearch] = useState("");
    const [maximumTime, setMaximumTime] = useState(60);
    const [cuisine, setCuisine] = useState("");

    const filteredRecipes = filterRecipes(recipes, search, cuisine, maximumTime);

    useEffect(() => {
        getRecipes();
    }, []);

    function getRecipes() {

        const recipeCollectionRef = collection(db, 'recipes');

        getDocs(recipeCollectionRef)
            .then(response => {
                const recipes = response.docs.map(doc => ({
                    data: doc.data(),
                    id: doc.id
                }));
                setRecipes(recipes);
            })
            .catch(error => console.log(error.message));
    }

    function isRecipeListEmpty() {
        return filteredRecipes.length == 0
    };

    return (
        <div className='home-page-root'>
            <div className='home-page-top'>
                {recipes && <RecipeOfTheDay recipe={recipes[2]} />}
                {recipes && <ClassicRecipeOfTheDay recipe={recipes[1]} />}
                <div className='home-page-container'>
                    <h2>Find Recipes</h2>
                    <input
                        type="text"
                        placeholder="Search for ingredient"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <label className='cook-time'>Max Cook Time: {maximumTime > 120 ? '120+' : maximumTime}
                        <div className='clock'>
                            <div className='minute-hand'
                                style={{ '--time': maximumTime }}
                            ></div>
                        </div>
                    </label>

                    <input
                        type="range"
                        step={5}
                        min={10}
                        max={120 + 5}
                        value={maximumTime}
                        onChange={(e) => setMaximumTime(e.target.value)}
                    />

                    <label> Cuisine:</label>
                    <select
                        type="select"
                        value={cuisine}
                        onChange={(e) => setCuisine(e.target.value)}
                    >
                        <option value=''>--select a cuisine--</option>
                        <option value='Indian'>Indian</option>
                        <option value='Thai'>Thai</option>
                        <option value='Italian'>Italian</option>
                        <option value='American'>American</option>
                        <option value='Mediterranean'>Mediterranean</option>
                        <option value='Mexican'>Mexican</option>
                        <option value='Japanese'>Japanese</option>
                    </select>
                </div>

            </div>

            {isRecipeListEmpty()
                ?
                <h1>No results for this search</h1>
                :
                <RecipeList recipes={filteredRecipes} />
            }

            <Outlet />

        </div>
    )
}