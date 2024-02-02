import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styles from './SearchComponent.module.css';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addCharacter } from '../../redux/actions';

const ComponentName = () => {

    
    
    return (
        <div className={styles.divSearch}>
            {/* <h1 className={styles.divSearchTitle}>Search Characters</h1>
            <p className={styles.divSearchText}>Or</p>
            <Link to='/search/locations'>
                <button>Search Locations</button>
            </Link>
            <Link to='/search/episodes'>
                <button>Search Episodes</button>
            </Link>
            <p className={styles.divSearchText}>There's 826 characters to search by ID</p>
            <p className={styles.divSearchText}>To restart your characters, just reload the page</p>
            <input type='search' placeholder='Search your Character...' onChange={inputValue} className={styles.input}></input>
            <button onClick={bringChar}><SearchIcon /><p>Search</p></button> */}
        </div>
    );
};

export default ComponentName;
