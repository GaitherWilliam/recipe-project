import { doc, getDoc, } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { db } from '../../lib/init-firebase';

export default function SingleFavoriteDetail() {

    const { id } = useParams();
    const [recipe, setRecipe] = useState();

    useEffect(() => {
        getRecipe();
    }, [id]);

    function getRecipe() {
        const docRef = doc(db, "usersFavorites", id);

        try {
            getDoc(docRef)
                .then(recipe => {
                    const docSnap = recipe;
                    if (docSnap.exists()) {
                        console.log(docSnap.data());
                        let data = docSnap.data();
                        setRecipe(data);
                    } else {
                        console.log("Document does not exist");
                    }
                })
        } catch (error) {
            console.log(error);
        }
    };

    var location = useLocation();
    const autoScrollRef = useRef(null);

    useEffect(() => {
        // 'snap to' some element
        if (location.pathname.includes('/favorites/')) {
            autoScrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        }
    }, [location]);


    return (
        <div className='recipe-page-root' >
            <h2 className='recipe-page-name' ref={autoScrollRef}>{recipe?.name}</h2>
            <div className='recipe-page-top'>

                <h4> Cuisine: {recipe?.cuisine}</h4>

                <h4> Cook Time: {recipe?.time} min</h4>

                <h4> Servings: {recipe?.servings}</h4>

            </div>
            <div className='recipe-page-container'>

                <img className='recipe-page-image' src={recipe?.image} width='300px' height='300px' />

                <div className='recipe-page-ingredients'>
                    <h4> Ingredients:</h4>
                    <p>
                        {recipe?.ingredients?.map((ing, i) => (
                            <li key={i}>{ing}</li>
                        ))}
                    </p>
                </div>
                <div>
                    <h4>
                        Instructions:
                    </h4>
                    {recipe?.instructions?.map((inst, i) => (
                        <p key={i}>{inst}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}
