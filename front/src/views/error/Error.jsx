import React from 'react';
import styles from './Error.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

export default function Error (){
    return (
        <div>
            <NavBar />
            <h1>Error 404</h1>
            <Footer />
        </div>
    )
}