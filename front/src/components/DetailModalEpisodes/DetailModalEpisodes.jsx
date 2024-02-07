import React from 'react';
import styles from './DetailModalEpisodes.module.css';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';

export default function DetailModalEpisodes({ epToRender, detail, setDetail }) {
    const value = epToRender.airDate.split('T');
    if (!detail) return null;
    return (
        <div className={styles.holeModal}>
            <div className={styles.cuadroModal}>
                <div className={styles.modalHeader}>
                    <label className={styles.labelTop}>{epToRender.name}</label>
                    <button onClick={() => {setDetail(false)}}
                    className={styles.closeBtn}><DoDisturbOnIcon 
                    sx={{
                        color: 'red',
                        height: '30px',
                        width: '30px',
                    }} /></button>
                </div>
                <div className={styles.modalBody}>
                    <img className={styles.img} src={epToRender.episodeImg} alt={epToRender.id} />
                    <div className={styles.modalInfo}>
                        <div className={styles.descriptionContainer}>
                            <p>Description:</p>
                            <p>{epToRender.description}</p>
                        </div>
                        <div className={styles.modalContainer}>
                            <p>ID</p>
                            <p>{epToRender.id}</p>
                        </div>
                        <div className={styles.modalContainer}>
                            <p>Season</p>
                            <p>{epToRender.season}</p>
                        </div>
                        <div className={styles.modalContainer}>
                            <p>Episode</p>
                            <p>{epToRender.number}</p>
                        </div>
                        <div className={styles.modalContainer}>
                            <p>Air Date</p>
                            <p>{value[0]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};