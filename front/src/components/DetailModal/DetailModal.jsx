import React from 'react';
import styles from './DetailModal.module.css';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';

const DetailModal = ({ character, detail, setDetail }) => {
    if (!detail) return null;
    return (
        <div className={styles.holeModal}>
            <div className={styles.cuadroModal}>
                <div className={styles.modalHeader}>
                    <label className={styles.labelTop}>{character.name}</label>
                    <button onClick={() => {
                        setDetail(false)
                    }} className={styles.closeBtn}><DoDisturbOnIcon sx = {{
                        color: 'red',
                        height: '30px',
                        width: '30px',
                    }} /></button>
                </div>
                <img className = {styles.img} src = {character.image} alt ={character.name}/>

                <div className={styles.modalContainer}>
          <p>ID</p>
        <p>{character.id}</p>
        </div>
        <div className={styles.modalContainer}>
          <p>Gender</p>
        <p>{character.gender}</p>
        </div>                
                <div className={styles.modalContainer}>
          <p>Location</p>
        <p>{character.location}</p>
        </div>
        <div className={styles.modalContainer}>
          <p>Origin</p>
        <p>{character.origin}</p>
        </div>
        <div className={styles.modalContainer}>
          <p>Species</p>
        <p>{character.species}</p>
        </div>
        <div className={styles.modalContainer}>
          <p>Status</p>
        <p>{character.status}</p>
        </div>
        <div className={styles.modalContainer}>
          <p>Type</p>
        <p>{character.type}</p>
        </div>
            </div>
        </div>
    );
};

export default DetailModal;
