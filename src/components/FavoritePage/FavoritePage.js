import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import { db } from '../../lib/init-firebase';
import FavoriteList from './FavoriteList';

export default function FavoritePage() {

    const [usersFavoriteRecipes, setUsersFavoriteRecipes] = useState([])

    useEffect(() => {
        getFavoriteRecipes();
    }, [usersFavoriteRecipes]);

    function getFavoriteRecipes() {

        const recipeCollectionRef = collection(db, 'usersFavorites');

        getDocs(recipeCollectionRef)
            .then(response => {
                const usersFavoriteRecipes = response.docs.map(doc => ({
                    data: doc.data(),
                    id: doc.id
                }));
                setUsersFavoriteRecipes(usersFavoriteRecipes);
            })
            .catch(error => {
                console.log(error.message)
            });
    }

    return (
        <div>
            <FavoriteList recipes={usersFavoriteRecipes} />
            <Outlet />
        </div>
    )
}
