import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAuth } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import React from 'react';
import { db } from '../../lib/init-firebase';
import { useToasts } from '../Toasts/ToastService';

export default function FavoriteButton({ recipe }) {

    const auth = getAuth();
    const user = auth.currentUser;
    const toast = useToasts();

    function writeUsersFavorites() {
        // write function to create data in usersFavorites collection
        console.log(user, recipe)

        const docRef = addDoc(collection(db, "usersFavorites"), {
            name: recipe.name,
            image: recipe.image,
            cuisine: recipe.cuisine,
            time: recipe.time,
            instructions: recipe.instructions,
            ingredients: recipe.ingredients,
            servings: recipe.servings
        }).then(() => {
            toast.success('Recipe was added to favorites')
        });

    }

    return (
        <div className='fav-button'>
            <button
                onClick={writeUsersFavorites}
            >
                <FontAwesomeIcon icon={faStar} className='icon' />
            </button>
        </div>
    )
}
