import React from 'react';
import styles from './LocationCards.module.css';
import { useSelector } from 'react-redux';
import LocationCard from './LocationCard/LocationCard';

export default function LocationCards({locations}){

    return(
        <div className = {styles.locationCardsContainer}>
            <h1>Hello from LocationCards</h1>
            {locations?.map((location) => <LocationCard  location={location} />)}
        </div>
    )
}