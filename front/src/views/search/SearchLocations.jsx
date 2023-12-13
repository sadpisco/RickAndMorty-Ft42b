import React from 'react';
import styles from './SearchLocations.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import LocationCards from '../../components/LocationCards/LocationCards';
import { useDispatch } from 'react-redux';
import { firstLocations } from '../../redux/actions';
import { useEffect } from 'react';

export default function SearchLocations(){
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(firstLocations());
    }, []);
    
    return(
        <div>
            <NavBar />
            <h1>Hello from Search Locations</h1>
            <LocationCards />
            <Footer />
        </div>
    )
}