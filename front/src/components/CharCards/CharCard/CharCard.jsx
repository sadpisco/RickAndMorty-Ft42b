import React from 'react';
import styles from './CharCard.module.css'
import { Link } from 'react-router-dom';

export default function CharCard(props) {
    const { character } = props;
    const conditionalRender = function(status){
        if (status == 'Alive'){
            return(
                <h2 className = {styles.status}>🟢Alive</h2>
            )
        } else if (status == 'Dead'){
            return(
                <h2 className = {styles.status}>🔴Dead</h2>
            )
        } else if (status == 'unknown'){
            return(
                <h2 className = {styles.status}>⚫Unknown</h2>
            )
        };
    };
    return (
        <Link className = {styles.cardLink} to = {`/detail/characters/${character.id}`}>
        <div className = {styles.cardContainer}>
            
            <div className = {styles.divImage}>
            <img className = {styles.img} src = {character.image} alt ={character.name}/>
            </div>
            <div className = {styles.info}>
            <h1 className = {styles.title}>{character.name}</h1>
            <h2 className = {styles.text}>ID: {character.id}</h2>
            <h2 className = {styles.text}>Location: {character.location}</h2>
            {conditionalRender(character.status)}
            </div>
            
        </div>
        </Link>
    );
};