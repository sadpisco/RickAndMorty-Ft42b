import React from 'react'
import CardEpisodes from '../cardEpisodes/CardEpisodes';
import styles from './ContainerEpisodes.module.css';



const ContainerEpisodes = ({epToRender, season}) => {
    console.log(epToRender);
  return (
    <div className={styles.containerEpisodes}>
      {epToRender?.map((element) => <CardEpisodes epToRender={element} />)}
    </div>
  )
}

export default ContainerEpisodes


