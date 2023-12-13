import React from 'react';
import style from './Footer.module.css'
import{ Link } from 'react-router-dom';

export default function Footer(){
    return(
        <footer className = {style.divFooter}>
            <div className = {style.container}> 

            <div className ={style.firm}>
            <h3 className = {style.name}>Leonardo Risco</h3>
            <h3 className = {style.grade}>FullStack Web Developer</h3>
            </div>

            <div className = {style.links}>
            <h2 className = {style.title}>Navigate</h2>
            <Link to = '/' className ={style.link}>
            Home
            </Link>
            <Link to = '/search/characters' className ={style.link}>
            Search
            </Link>
            <Link to = '/about' className ={style.link}>
            About
            </Link>
            <Link to = '/contact' className ={style.link}>
            Contact
            </Link>
            </div>

            <div className = {style.floro}>
                <h2 className = {style.titleFloro}>The Rick And Morty Proyect</h2>
                <p>This was project was develop using The Rick and Morty API.</p>
            </div>
            </div>

            <div>
            <p className = {style.copyright}> © Copyright 2023 | All rights reserved.</p>
            </div>

        </footer>
    )
}