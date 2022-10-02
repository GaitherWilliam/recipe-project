import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteDoc, doc, getFirestore } from 'firebase/firestore';
import React from 'react';

export default function DeleteFavoriteButton({ id }) {

    const db = getFirestore();
    const docRef = doc(db, "usersFavorites", id);

    function deleteUsersFavorites() {
        deleteDoc(docRef)
            .then()
            .catch(error => {
                console.log(error)
            });
    };

    return (
        <button onClick={deleteUsersFavorites} className='hidden x'  >
            <FontAwesomeIcon icon={faCircleXmark} />
        </button>
    )
}
