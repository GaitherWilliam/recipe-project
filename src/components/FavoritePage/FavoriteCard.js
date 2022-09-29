import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../RecipeCard.css'
import DeleteFavoriteButton from './DeleteFavoriteButton'

export default function FavoriteCard({ id, name, image, cuisine, time }) {

    return (
        <div className='recipe-card-root'>
            <div className='card-content'>
                <div className='image-button'>
                    <img src={image} />
                </div>
                <div className='recipe-card-info'>
                    <Link className='card-link' to={id}>
                        <h3>{name}</h3>
                        <p>{cuisine}</p>
                        <p>{time} min</p>
                    </Link>
                    <DeleteFavoriteButton id={id} />
                </div>
            </div>
        </div>
    )
}