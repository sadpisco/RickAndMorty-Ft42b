import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';

export default function NavBar () {
    return (
        <header className = {style.navContainer}>            
            <div className = {style.divTitle}>
                <Link to ='/' className = {style.title}>
                The Rick And Morty Proyect
                </Link>
            </div>
            <nav className = {style.divButtons}>
            <Link className = {style.link} to = '/'>Home</Link>
            <Link className = {style.link} to = '/search/characters'>Search</Link>
            <Link className = {style.link} to = '/about'>About</Link>
            <Link className = {style.link} to = '/contact'>Contact</Link>
            </nav>
        </header>
    );
};