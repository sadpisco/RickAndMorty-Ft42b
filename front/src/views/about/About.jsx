import React from 'react';
import styles from './About.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

export default function About (){
    return (
        <div className = {styles.divAbout}>
            <NavBar />
            <div className = {styles.containerAbout}>
            <h1>Hello from About</h1>

            </div>
            <Footer className = {styles.futer}/>
        </div>
    )
}