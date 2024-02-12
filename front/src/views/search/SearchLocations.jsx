import React from 'react';
import styles from './SearchLocations.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import LocationCards from '../../components/LocationCards/LocationCards';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export default function SearchLocations(){
    const locations = useSelector(state => state.allLocations);
    const sliced = locations.slice(0, 12);
    const [ locationsToRender, setLocationsToRender ] = useState(sliced);
    const [ estadoInput, setEstadoInput ] = useState();
    const handleInput = function(event){
        let value = event.target.value;
        setEstadoInput(value);
        console.log(estadoInput);
    };
    const handleSearch = function(){
        if(estadoInput > 126 || estadoInput <= 0){
            alert('Id is out of range, plase enter and Id between 1 and 126')
        } else {
            let founded = locations.find((element) => element.id == estadoInput);
            let repeat = locationsToRender.find((element) => element.id == founded.id)
            if(repeat === undefined){
                setLocationsToRender( prevArray => [founded, ...prevArray]);
            } else if (repeat){
                alert('This Location has already been displayed on the screen');
            };
        };
    };
    
    return(
        <div className = {styles.searchLocationsContainer}>
            <NavBar />
            <div className={styles.divSearch}>
                <div className={styles.searchInfo}>
                    <h1 className={styles.divSearchTitle}>Search Locations</h1>
                    <p className={styles.divSearchText}>Or</p>
                    <div className={styles.Links}>
                        <Link to='/search/characters' className={styles.divSearchLinks}>
                            <h1 className={styles.h1}>Search Characters</h1>
                        </Link>
                        <Link to='/search/episodes' className={styles.divSearchLinks}>
                            <h1 className={styles.h1}>Search Episodes</h1>
                        </Link>
                    </div>
                    <p className={styles.divSearchText}>There's 126 locations to search by ID</p>
                </div>
                <div className={styles.inputAndBtn}>
                    <input type='search' placeholder="Location's ID" className={styles.input} onChange={handleInput}></input>
                    <button  className={styles.searchBtn} onClick={handleSearch}><SearchIcon /></button>
                </div>
                <div className={styles.divFilters}>
                </div>
            </div>
            <LocationCards locationsToRender = {locationsToRender}/>
            <Footer />
        </div>
    )
}