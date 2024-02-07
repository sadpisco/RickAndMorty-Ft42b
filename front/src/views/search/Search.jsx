import React from 'react';
import styles from './Search.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import CharCards from '../../components/CharCards/CharCards';
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
    let isSearchView = true;
    const characters = useSelector((state) => state.allCharacters);
    const first20Characters = useSelector((state) => state.searchCharacters);
    const [ charsToRender, setChars ] = useState(first20Characters);
    const [ favorites, setFavorites] = useState([]);
    const [ characterId, setCharacterId ] = useState();
    const inputValue = function (event) {
        let value = event.target.value;
        setCharacterId(value);
    };
    const bringChar = function () {
        if (characterId > 826 || characterId <= 0){
            alert('Id is out of range, please enter an Id between 0 and 826.');
        } else {
            let founded = characters.find((element) => element.id == characterId);
        let repeat = charsToRender.find((element) => element.id == founded.id);
        if(repeat === undefined) return setChars( prevArray => [ founded, ...prevArray ]);
        else if (repeat){
            alert('This character has already been displayed on the screen.');
        };
        };
    };
    const deleteChar = function(id){
        console.log(id);
        let newArr = charsToRender.filter((element) => element.id !== id);
        return setChars(newArr);
    };
    const favHandler = function(id) {
        let charToAdd = charsToRender.find((element) => element.id == id);
        let repeat = favorites.find((element) => element.id == charToAdd.id);
        if(repeat === undefined) return setFavorites( prevArray => [ charToAdd, ...prevArray]);
        else if (repeat){
            let result = favorites.filter((element) => element.id !== charToAdd.id);
            return setFavorites(result);
        };
    };
    console.log(favorites);

    return (
        <div className={styles.searchContainer}>
            <NavBar />
            <div className={styles.divSearch}>
                <div className = {styles.searchInfo}>
            <h1 className={styles.divSearchTitle}>Search Characters</h1>
            <p className={styles.divSearchText}>Or</p>
            <div className = {styles.Links}>
            <Link to='/search/locations' className={styles.divSearchLinks}>
            <h1 className = {styles.h1}>Search Locations</h1>
            </Link>
            <Link to='/search/episodes' className={styles.divSearchLinks}>
            <h1 className = {styles.h1}>Search Episodes</h1>
            </Link>
            </div>
            <p className={styles.divSearchText}>There's 826 characters to search by ID</p>
            <p className={styles.divSearchText}>To restart your characters, just reload the page</p>
            </div>
            <div className = {styles.inputAndBtn}>
            <input type='search' placeholder="Character's ID" onChange={inputValue} className={styles.input}></input>
            <button onClick={bringChar} className = {styles.searchBtn}><SearchIcon /></button>
            </div>
        </div>
            <div className={styles.divCards}>
                <h1 className={styles.divCardsTitle}>Your Characters</h1>
                <CharCards characters = {charsToRender} deleteChar = {deleteChar} isSearchView = {isSearchView} favHandler = {favHandler}/>
            </div>
            <Footer />
        </div>
    );
};