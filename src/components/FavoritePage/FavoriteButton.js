import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getAuth } from 'firebase/auth';
import React from 'react'
import { db } from '../../lib/init-firebase';

export default function FavoriteButton({ recipe }) {

    const auth = getAuth()
    const user = auth.currentUser;

    function writeUsersFavorites() {
        // write function to create data in usersFavorites collection
        console.log(user, recipe)
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
