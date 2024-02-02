import React from 'react';
import styles from './Landing.module.css';
import NavBar from '../../components/NavBar/NavBar'
import ContainerCards from './../../components/containerCards/ContainerCards';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { paginatedCharacters } from '../../redux/actions';
import { useEffect } from 'react';


export default function Landing (){
    const dispatch = useDispatch();
    const characters = useSelector((state) => state.allCharacters);
    let initialPage = 1;
    let charsPerPage = 6;
    let numberOfPages = Math.ceil(characters.length / charsPerPage);
    useEffect( () => {
        if (characters){
            dispatch(paginatedCharacters(initialPage, charsPerPage));
        };
    },[characters]);
    const filtered = useSelector ((state) => state.paginatedCharacters);

    return (
        <div className={styles.divLanding}>
            <NavBar />
            <div className={styles.divOne}>
                <div className={styles.selected}>
                    <h1 className={styles.title}>¡Welcome to The Rick and Morty Project!</h1>
                    <p className={styles.title2} >Here, you'll be able to find every character, episode and location showed in the series and general details of every single one of them. You can even create your own character!</p>
                    <p className={styles.title2}>This was project was develop using The Rick and Morty API and was written in JavaScript.</p>
                    <Link to='/search/characters'>
                        <button className={styles.btnGo}>
                            Let's Go
                        </button>
                    </Link>
                </div>
            </div>
            <div className={styles.divTwo}>
                <h1 className={styles.divTwoTitle}>Most popular characters</h1>
                <ContainerCards characters={filtered} initialPage={initialPage} charsPerPage={charsPerPage} numberOfPages={numberOfPages} />
            </div>
            <div className = {styles.divThree}>

            </div>
            <Footer />
        </div>
    );
};