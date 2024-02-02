import React from 'react';
import styles from './DetailChars.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


export default function DetailChars() {
    const { id } = useParams();
    const characters = useSelector(state => state.allCharacters);
    const [ charToRender, setCharToRender ] = useState([]);
    useEffect( () => {
        if(characters){
            let value = characters.find((element) => element.id == id);
            setCharToRender(value);
            };
    }, [characters]);

    const conditionalRender = function (status) {
        if (status == 'Alive') {
            return (
                <h2 className={styles.status}>🟢Alive</h2>
            )
        } else if (status == 'Dead') {
            return (
                <h2 className={styles.status}>🔴Dead</h2>
            )
        } else if (status == 'unknown') {
            return (
                <h2 className={styles.status}>⚫Unknown</h2>
            )
        };
    };
    const typeValidator = function (type){
        if(type == ''){
            return ;
        } else {
            return `Type: ${type}`
        };
    };
    console.log(characters);
    return (
        <div className={styles.detailDiv}>
            <NavBar />
            <div className={styles.detailDiv}>
            { charToRender ?
                            <div className={styles.cardContainer}>                    
                            <h1>{charToRender.name}</h1>
                            <img className={styles.img} src={charToRender.image} alt={charToRender.name} />
                            <h2>Identifier: {charToRender.id}</h2>
                            <h2>Condition: {conditionalRender(charToRender.status)}</h2>
                            <h2>Location: {charToRender.location}</h2>
                            <h2>Origin: {charToRender.origin}</h2>
                            <h2>Specie: {charToRender.species}</h2>
                            <h2>{typeValidator(charToRender.type)}</h2>
                            <a href ={charToRender.url}>JSON</a>
                        </div>
                        : null
            }
            </div>
            <Footer />
        </div>
    );
};