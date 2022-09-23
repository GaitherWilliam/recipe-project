import React from 'react'
import { Link } from 'react-router-dom'
import './RecipeCard.css'

export default function RecipeCard({ id, name, image, cuisine, time }) {

    return (
        <div className='recipe-card-root'>
            <Link className='card-link' to={'/recipes/' + id}>
                <div className='card-content'>
                    <img src={image} />
                    <div className='recipe-card-info'>
                        <h3>{name}</h3>
                        <p>{cuisine}</p>
                        <p>{time}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
