import React from 'react';
import styles from './SearchEpisodes.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import  ContainerEpisodes from '../../components/ContainerEpisodes/ContainerEpisodes';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "../../tailwind.css";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';


export default function SearchEpisodes(){
    const episodes = useSelector(state => state.allEpisodes);
    const [ season, setSeason ] = useState(1);
    const sorteada = episodes.sort((a, b) => {
        if (a.id < b.id){
            return -1;
        } else if (a.id > b.id){
            return 1;
        } else {
            return 0;
        };
    })
    const epToRender = sorteada.filter(element => element.season == season);
    console.log(episodes, epToRender);
    function handleNext (){
        if (season < 5){
            setSeason(season + 1);
        };
    };
    function handlePrevious (){
        if (season > 1){
            setSeason(season - 1);
        };
    };

    return(
        <div className={styles.fondo}>
            <div className={styles.searchEpisodesContainer}>
                <NavBar />
                <div className={styles.divSearch}>
                    <div className={styles.searchInfo}>
                        <h1 className={styles.divSearchTitle}>Search Episodes</h1>
                        <p className={styles.divSearchText}>Or</p>
                        <div className={styles.Links}>
                            <Link to='/search/locations' className={styles.divSearchLinks}>
                                <h1 className={styles.h1}>Search Locations</h1>
                            </Link>
                            <Link to='/search/characters' className={styles.divSearchLinks}>
                                <h1 className={styles.h1}>Search Characters</h1>
                            </Link>
                        </div>
                        <p className={styles.divSearchText}>There's 51 episodes in 5 seasons</p>
                    </div>
                    <div className={styles.divEpisodes}>
                        <div className={styles.buttons}>
                            <button className={styles.paginationBtn} onClick={handlePrevious}><NavigateBeforeIcon />Previous</button>
                            <h1 className={styles.h1}>Season {season}</h1>
                            <button className={styles.paginationBtn} onClick={handleNext}>Next<NavigateNextIcon /></button>
                        </div>
                        <ContainerEpisodes epToRender={epToRender} season={season} />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
