import React from 'react';
import styles from './CharCards.module.css'
import CharCard from './CharCard/CharCard';
import { useEffect } from 'react';
import { firstCharacters } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function CharCards(props){
    const { characters } = props;
    console.log(characters);
    return(
        <div className = {styles.divCharCards}>
            <div className = {styles.floroContainer}>
            </div>
            <div className = {styles.cardsContainer}>
            {characters.map((character) => 
                <CharCard character = {character} key = {character.id}/>
            )}
            </div>
        </div>
    );
};