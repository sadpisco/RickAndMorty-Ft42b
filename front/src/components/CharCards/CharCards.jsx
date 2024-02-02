import React from 'react';
import styles from './CharCards.module.css'
import CharCard from './CharCard/CharCard';

export default function CharCards({characters, deleteChar, isSearchView, favHandler}){
    const conditionalRendering = function(){
        if (characters.length > 0) {
            return(
                characters.map((character) => 
                <CharCard character = {character} key = {character.id} deleteChar = {deleteChar} isSearchView = {isSearchView} favHandler = {favHandler}/>))
        } else if (characters.length == 0) {
            return <h1 className = {styles.infoMsg}>No characters to display, please add them on the SearchBar.</h1>
        }
    }

    return(
        <div className = {styles.divCharCards}>
            <div className = {styles.floroContainer}>
            </div>
            <div className = {styles.cardsContainer}>
            {conditionalRendering()}
            </div>
        </div>
    );
};