import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoritePage/FavoriteButton';
import './RecipeCard.css';

export default function RecipeCard({ id, name, image, cuisine, time, servings, ingredients, instructions }) {

    return (
        <div className='recipe-card-root'>
            <div className='card-content'>
                <div className='image-button'>
                    <img src={image} />
                    <FavoriteButton recipe={{ id, name, image, cuisine, time, servings, ingredients, instructions }} />
                </div>
                <Link className='card-link' to={id}>
                    <div className='recipe-card-info'>
                        <h3>{name}</h3>
                        <p>{cuisine}</p>
                        <p>{time} min</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
