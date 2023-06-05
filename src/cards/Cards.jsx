/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Cards.jsx
   Version: I
   Creation: 04/06/2023
   Last modification: 05/06/2023
*/

import styles from './Cards.module.css'

const Cards = ({ img, title }) => {
    return (
        <div className={styles.crdContainer}>
            <div className={styles.element}>
                <img src={img} alt={title} />
            </div>
        </div>
    )
}

export default Cards;
