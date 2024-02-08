import React from 'react';
import styles from './Footer.module.css'
import{ Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';

export default function Footer(){
    return(
        <footer className = {styles.divFooter}>
            <div className = {styles.footerContainer}>
            <div className = {styles.childrenDivOne}>
                <h1 className = {styles.name}><CodeIcon sx = {{
                    height: '55px',
                    width: '55px',                    
                }}/>Leonardo Risco</h1>
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
                <a href='https://www.linkedin.com/in/leonardo-risco/' className = {styles.aLink}><LinkedInIcon sx = {{
                    height: '55px',
                    width: '55px',
                }}/></a>
                <a href='https://github.com/sadpisco/TheRickAndMortyProyect' className = {styles.aLink}><GitHubIcon sx = {{
                    height: '55px',
                    width: '55px',
                }}/></a>
                <a href='' className = {styles.aLink}><WorkIcon sx = {{
                    height: '55px',
                    width: '55px',
                }}/></a>
            </div>
            </div>
            
        </footer>
    );
};