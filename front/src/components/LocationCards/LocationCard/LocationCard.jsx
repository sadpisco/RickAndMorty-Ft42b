import React from 'react';
import styles from './LocationCard.module.css';

export default function LocationCard({locationsToRender}){
    return(
        <div className = {styles.cardLocationContainer}>
            <div className = {styles.idDiv}>
                <h1 className = {styles.h1Id}>{locationsToRender.id}</h1>
            </div>
            <div className = {styles.infoCard}>
            <h1 className = {styles.textTitle}>{locationsToRender.name}</h1>
            <h3 className = {styles.text}>Dimension: {locationsToRender.dimension}</h3>
            <h3 className = {styles.text}>Type: {locationsToRender.type}</h3>
            </div>
        </div>
    );
};