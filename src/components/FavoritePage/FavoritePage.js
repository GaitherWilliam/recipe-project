import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { db } from '../../lib/init-firebase';
import FavoriteList from './FavoriteList';

export default function FavoritePage() {

    const [favoriteRecipes, setFavoriteRecipes] = useState([]);

    useEffect(() => {
        getFavoriteRecipes();
        console.log('a')
    }, []);

    function getFavoriteRecipes() {

        const recipeCollectionRef = collection(db, 'usersFavorites');

        getDocs(recipeCollectionRef)
            .then(response => {
                const favoriteRecipes = response.docs.map(doc => ({
                    data: doc.data(),
                    id: doc.id
                }));
                setFavoriteRecipes(favoriteRecipes);
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    return (
        <div>
            <FavoriteList recipes={favoriteRecipes} />
            <Outlet />
        </div>
    )
}