import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../../lib/init-firebase';
import RecipeList from '../RecipeList';

export default function SearchResult() {
    const { searchParam } = useParams();
    // look for a query
    const [recipes, setRecipes] = useState([]);
    const itemsRef = useRef(null);

    useEffect(() => {
        itemsRef.current.scrollIntoView({ behavior: 'smooth' })
    })

    useEffect(() => {
        getRecipes()
    }, [searchParam])

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
        <div className='search-results-root' ref={itemsRef}>
            <RecipeList title={`Results for '${searchParam}'`} recipes={recipes} />
        </div>
    )
}
