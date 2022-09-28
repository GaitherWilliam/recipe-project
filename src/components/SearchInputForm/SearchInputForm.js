import React, { useState, useEffect } from "react";
import { db } from '../../lib/init-firebase'
import { collection, getDocs } from 'firebase/firestore';
import { filterRecipes } from "../../services/recipeFunctions";
import RecipeList from "../RecipeList";

function SearchInputForm() {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const filteredRecipes = filterRecipes(recipes, search);

    useEffect(() => {
        getRecipes();
    }, [])

    useEffect(() => {
    }, [recipes])

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

    return (
        <div>
            <RecipeList recipes={filteredRecipes} />
        </div>
    );
}
export default SearchInputForm;