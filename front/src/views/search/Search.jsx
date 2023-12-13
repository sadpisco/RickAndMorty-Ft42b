import React from 'react';
import styles from './Search.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import CharCards from '../../components/CharCards/CharCards';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { charactersById, emptyChars, restoreChars, firstCharacters } from '../../redux/actions';
import { useState, useEffect } from 'react';

export default function Search() {
    const dispatch = useDispatch();
    const characters = useSelector((state) => state.firstCharacters);
    const [characterId, setCharacterId] = useState();
    useEffect( ()=> {
        dispatch(firstCharacters());
    },[]);
    const inputValue = function (event) {
        setCharacterId(event.target.value);
    };
    const searchBtnHandler = function () {
        if (characterId > 826 || characterId <= 0) {
            alert("Please enter and ID between 1 and 826.")
        } else
            dispatch(charactersById(Number(characterId)));
    };

    const emptyCharsHandler = function () {
        dispatch(emptyChars());
    };

    const restoreCharsHandler = function () {
        dispatch(restoreChars());
    };

    return (
        <div className={styles.searchContainer}>
            <NavBar />
            <div className={styles.divSearch}>
                <h1 className={styles.divSearchTitle}>Search Characters</h1>
                <p className={styles.divSearchText}>Or</p>
                <Link to = '/search/locations'>
                <button>Search Locations</button>
                </Link>
                <Link to = '/search/episodes'>
                <button>Search Episodes</button>
                </Link>
                <p className={styles.divSearchText}>There's 826 characters to search by ID</p>
                <input type='search' placeholder='Search your Character...' onChange={inputValue}className = {styles.input}></input>
                <button onClick={searchBtnHandler} className = {styles.searchBtn}>🔍</button>
            </div>

            <div>
                <button onClick={emptyCharsHandler}>Clear Characters</button>
                <button onClick={restoreCharsHandler}>Restore Characters</button>
            </div>

            <div className={styles.divCards}>
                <h1 className={styles.divCardsTitle}>Your Characters</h1>
                <CharCards characters = {characters}/>
            </div>

            <Footer />
        </div>
    );
};