import React from 'react';
import styles from './LocationCard.module.css';

export default function LocationCard(props){
    const { location } = props;

    return(
        <div>
            <h1>{location.name}</h1>
        </div>
    )
}