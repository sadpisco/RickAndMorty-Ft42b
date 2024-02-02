import React from 'react';
import styles from './LocationCard.module.css';

export default function LocationCard({location}){

    return(
        <div>
            <h1>{location.name}</h1>
        </div>
    )
}