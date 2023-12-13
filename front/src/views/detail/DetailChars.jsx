import React from 'react';
import styles from './DetailChars.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { charactersDetail } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function DetailChars() {
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(charactersDetail(id));
    }, []);
    const character = useSelector(state => state.charactersDetail);
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
    console.log(character);
    return (
        <div className={styles.detailDiv}>
            <NavBar />
            <div className={styles.detailDiv}>
                <div className={styles.cardContainer}>
                    <h1>{character.name}</h1>
                    <img className={styles.img} src={character.image} alt={character.name} />
                    <h2>Identifier: {character.id}</h2>
                    <h2>Condition: {conditionalRender(character.status)}</h2>
                    <h2>Location: {character.location}</h2>
                    <h2>Origin: {character.origin}</h2>
                    <h2>Specie: {character.species}</h2>
                    <h2>{typeValidator(character.type)}</h2>
                    <a href ={character.url}>JSON</a>
                </div>
            </div>
            <Footer />
        </div>
    );
};