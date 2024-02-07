import React from 'react'
import styles from './CardEpisodes.module.css';
import { useState } from 'react';
import DetailModalEpisodes from '../DetailModalEpisodes/DetailModalEpisodes';

const CardEpisodes = ({epToRender}) => {
  const [ detail, setDetail ] = useState(false);
  const clickHandler = function(){
    setDetail(!detail);
    console.log(epToRender);
};
function renderImage (episodeImg){
  if(episodeImg){
    return episodeImg;
  } else if (episodeImg == null) {
    return 'https://c8.alamy.com/comp/2A10MX6/page-not-found-404-error-website-illustration-red-stripes-hot-air-balloons-on-blue-skyscape-with-error-404-sign-and-interface-template-for-website-warning-page-on-travel-booking-mobile-app-2A10MX6.jpg';
  };
};
  return (
    <div className = {styles.cardEpisodeContainer} onClick = {clickHandler}>
      <img src = {renderImage(epToRender.episodeImg)} alt = {epToRender.id} className = {styles.img}/>
      <div className = {styles.cardInfo}>
      <h1 className = {styles.epName}>{epToRender.name}</h1>
      <h3>Episode {epToRender.number}</h3>
      </div>
      <DetailModalEpisodes epToRender = {epToRender} detail={detail} setDetail={setDetail}/>
    </div>
  )
}

export default CardEpisodes