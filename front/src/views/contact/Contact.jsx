import React from 'react';
import styles from './Contact.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

export default function Contact (){
    return (
        <div className = {styles.contactContainer}>
            <NavBar />
            <div className = {styles.divOne}>

            </div>
            <Footer />
        </div>
    )
}