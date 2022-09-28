import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteButton from './FavoritePage/FavoriteButton'
import './RecipeCard.css'

export default function RecipeCard({ id, name, image, cuisine, time }) {

    return (
        <div className='recipe-card-root'>
            <Link className='card-link' to={id}>
                <div className='card-content'>
                    <img src={image} />
                    <div className='recipe-card-info'>
                        <h3>{name}</h3>
                        <p>{cuisine}</p>
                        <p>{time} min</p>
                    </div>
                    <FavoriteButton recipe={{ id, name, image, cuisine, time }} />
                </div>
            </Link>
        </div>
    )
}
