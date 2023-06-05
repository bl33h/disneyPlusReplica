/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Comedy.jsx
   Version: I
   Creation: 04/06/2023
   Last modification: 04/06/2023
*/

import styles from './Comedy.module.css'

// components
import Cards from '../../cards/Cards';

// media
import co1 from '../../assets/media/co1.jpeg';
import co2 from '../../assets/media/co2.jpeg';
import co3 from '../../assets/media/co3.jpeg';
import co4 from '../../assets/media/co4.jpeg';
import co5 from '../../assets/media/co5.jpeg';

const Comedy = ( { index } ) => {
    const rec0 = [
        { img: co1, title: 'indj1' },
        { img: co2, title: 'indj2' },
        { img: co3, title: 'indj3' },
        { img: co4, title: 'indj4' },
        { img: co5, title: 'chin' }
    ]

    const cards = index === 0 ? rec0 : rec0
    return (
        <div className={styles.view}>
            {cards.map((item) => (
                <Cards img={item.img} title={item.title} />
            ))}
        </div>
    )
}

export default Comedy