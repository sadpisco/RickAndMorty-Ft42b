import React from 'react';
import styles from './Footer.module.css'
import{ Link } from 'react-router-dom';

export default function Footer(){
    return(
        <footer className = {styles.divFooter}>
            <div className = {styles.footerContainer}>
            <div className = {styles.childrenDivOne}>
                <h1 className = {styles.name}>Leonardo Risco</h1>
                <h3 className = {styles.grade}>FullStack Engineer</h3>
            </div>
            <div className = {styles.childrenDivTwo}>
                <h1 className = {styles.name}>Navigate</h1>
                <div className = {styles.links}>
                <Link to = '/' className = {styles.link}><h3>Home</h3></Link>
                <Link to = '/' className = {styles.link}><h3>Search</h3></Link>
                <Link to = '/' className = {styles.link}><h3>About</h3></Link>
                <Link to = '/' className = {styles.link}><h3>Contact</h3></Link>
                </div>
                <h1 className = {styles.copyright}>© 2024 All Rights Reserved</h1>
            </div>
            <div className = {styles.childrenDivThree}>
                <h1 className = {styles.name}>The Rick and Morty Proyect</h1>
                <h3 className = {styles.grade}>Thanks rym api</h3>
            </div>
            </div>
            
        </footer>
    );
};