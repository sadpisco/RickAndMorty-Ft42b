import React from 'react';
import styles from './LocationCards.module.css';
import { useSelector } from 'react-redux';
import LocationCard from './LocationCard/LocationCard';



export default function LocationCards(){
    const locationsToRender = useSelector(state => state.locations);
    console.log(locationsToRender);

    return(
        <div className = {styles.locationCardsContainer}>
            <h1>Hello from LocationCards</h1>
            {locationsToRender.map((location) => <LocationCard  location={location} />)}
        </div>
    )
}