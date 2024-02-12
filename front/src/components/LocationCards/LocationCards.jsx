import React from 'react';
import styles from './LocationCards.module.css';
import { useSelector } from 'react-redux';
import LocationCard from './LocationCard/LocationCard';

export default function LocationCards({locationsToRender}){

    return(
        <div className = {styles.locationCardsContainer}>
            {locationsToRender?.map((locationsToRender) => <LocationCard  locationsToRender={locationsToRender} key = {locationsToRender.id}/>)}
        </div>
    )
}