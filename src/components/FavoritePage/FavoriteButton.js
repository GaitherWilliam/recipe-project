import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getAuth } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import React from 'react'
import { db } from '../../lib/init-firebase';
import { useToasts } from '../Toasts/ToastService';

export default function FavoriteButton({ recipe }) {

    const auth = getAuth()
    const user = auth.currentUser;
    const toast = useToasts()

    async function writeUsersFavorites() {
        // write function to create data in usersFavorites collection
        console.log(user, recipe)

        const docRef = await addDoc(collection(db, "usersFavorites"), {
            name: recipe.name,
            image: recipe.image,
            cuisine: recipe.cuisine,
            time: recipe.time
        })
        toast.success('blah')
        console.log(docRef.id)
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
