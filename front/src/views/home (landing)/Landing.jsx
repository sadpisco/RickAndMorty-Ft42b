import React from 'react';
import styles from './Landing.module.css';
import NavBar from '../../components/NavBar/NavBar'
import ContainerCards from './../../components/containerCards/ContainerCards';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

export default function Landing (){
    return (
        <div className = {styles.divLanding}>
            <NavBar />
            <div className = {styles.divOne}>
                <div className = {styles.selected}>
            <h1 className = {styles.title}>¡Welcome to The Rick and Morty Proyect!</h1>
            <p className = {styles.title2} >Here, you'll be able to find every character, episode and location showed in the series and general details of every single one of them. You can even create yourself a character!</p>
            <p className = {styles.title2}>This was project was develop using The Rick and Morty API.</p>
            <Link to = '/search/characters'>
                <button className = {styles.btnGo}>
                    Lets Go
                </button>
            </Link>
            </div>
            </div>
            <div className = {styles.divTwo}>
                <h1 className = {styles.divTwoTitle}>Most popular characters</h1>
                <ContainerCards />
            </div>
            <Footer />
        </div>
    );
};