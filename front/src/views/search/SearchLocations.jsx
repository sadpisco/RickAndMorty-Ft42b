import React from 'react';
import styles from './SearchLocations.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import LocationCards from '../../components/LocationCards/LocationCards';
import { useSelector } from 'react-redux';

export default function SearchLocations(){
    const locations = useSelector(state => state.allLocations);
    console.log(locations);
    
    return(
        <div>
            <NavBar />
            <h1>Hello from Search Locations</h1>
            <LocationCards locations = {locations}/>
            <Footer />
        </div>
    )
}