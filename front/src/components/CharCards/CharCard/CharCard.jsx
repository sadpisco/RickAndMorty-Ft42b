import React from 'react';
import styles from './CharCard.module.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import DetailModal from '../../DetailModal/DetailModal';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Brightness1Icon from '@mui/icons-material/Brightness1';

export default function CharCard({character, deleteChar, isSearchView, favHandler}) {
    const [ detail, setDetail ] = useState(false);
    const [ favorite, setFavorite ] = useState(false);
    const clickHandler = function(){
        setDetail(!detail);
    };

    const conditionalRender = function(status){
        if (status == 'Alive'){
            return(
                <h2 className = {styles.status}>🟢Alive</h2>
            )
        } else if (status == 'Dead'){
            return(
                <h2 className = {styles.status}>🔴Dead</h2>
            )
        } else if (status == 'unknown'){
            return(
                <h2 className = {styles.status}>⚫Unknown</h2>
            )
        };
    };
    return (
        <div className={styles.cardContainer}>
            <img className={styles.img} src={character.image} alt={character.name} />
            <div className={styles.info}>
                {isSearchView &&
                    <div className={styles.divButtons}>
                        <button className = {styles.btnCard} onClick={clickHandler}><SearchIcon sx = {{
                            color: 'white',
                            height: '22px',
                            padding: '2px',
                        }}/></button>
                        <button className = {styles.btnCard} onClick={() => {
                            favHandler(character.id); 
                            setFavorite(!favorite);
                            }}>
                            {favorite ?
                            <FavoriteIcon sx = {{
                                color: 'red',
                                height: '22px',
                                padding: '2px',
                            }}/> : <FavoriteBorderIcon 
                            sx = {{
                                color: 'white',
                                height: '22px',
                                padding: '2px',
                            }}
                            />

                            }
                            
                        </button>
                        <button className = {styles.btnCard} onClick={() => deleteChar(character.id)}><ClearIcon sx = {{
                            color: 'white',
                            height: '22px',
                            padding: '2px',
                        }}/></button>
                    </div>
                }
                <h1 className={styles.title} onClick = {clickHandler}>{character.name}</h1>
                <h2 className={styles.text}>ID: {character.id}</h2>
                <h2 className={styles.text}>{character.location}</h2>
                {conditionalRender(character.status)}
            </div>
            <DetailModal character={character} detail={detail} setDetail={setDetail} />
        </div>
    );
};