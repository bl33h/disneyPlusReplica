/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: LCards.jsx
   Version: I
   Creation: 04/06/2023
   Last modification: 05/06/2023
*/

import styles from './LCards.module.css';

const LCards = ({ img, title }) => {
  return (
    <div className={styles.largeCardContainer}>
      <div className={styles.card}>
        <img src={img} alt={title} />
      </div>
    </div>
  );
};

export default LCards;