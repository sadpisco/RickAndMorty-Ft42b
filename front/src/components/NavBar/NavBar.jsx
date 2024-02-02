import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import InfoIcon from '@mui/icons-material/Info';

export default function NavBar () {
    return (
        <header className = {style.navContainer}>
            <div className = {style.divTitle}>
                <Link to ='/' className = {style.title}>
                The Rick And Morty Project
                </Link>
            </div>
            <nav className = {style.divButtons}>
            <Link className = {style.link} to = '/'><HomeIcon/><p className = {style.textLink}>Home</p></Link>
            <Link className = {style.link} to = '/search/characters'><SearchIcon /><p className = {style.textLink}>Search</p></Link>
            <Link className = {style.link} to = '/about'><InfoIcon /><p className = {style.textLink}>About</p></Link>
            <Link className = {style.link} to = '/contact'><PermContactCalendarIcon /><p className = {style.textLink}>Contact</p></Link>
            </nav>
        </header>
    );
};