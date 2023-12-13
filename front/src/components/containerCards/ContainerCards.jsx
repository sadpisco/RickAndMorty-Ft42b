import React from 'react';
import styles from './ContainerCards.module.css'
import CharCard from '../CharCards/CharCard/CharCard';
import { useSelector, useDispatch } from 'react-redux';
import { landingCharacters } from '../../redux/actions';
import { useEffect } from 'react';
export default function ContainerCards(){    
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(landingCharacters());
    }, []);
    const charsToRender = useSelector(state => state.characters);
    
    return(
        <div className = {styles.holeContainer}>
        <div className = {styles.divContainer}>
        {charsToRender.map((element)=> <CharCard character = {element} key = {element.id}/>)}
        </div>
        </div>
        
    );
};