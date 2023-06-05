/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Structure.jsx
   Version: I
   Creation: 04/06/2023
   Last modification: 04/06/2023
*/

import styles from './Structure.module.css'

const Structure = ({ img, title, video }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img src={img} alt={title} />
        <video loop autoPlay muted playsInline className={styles.animation}>
          <source src={video} type='video/mp4' />
        </video>
      </div>
    </div>
  )
}

export default Structure;
