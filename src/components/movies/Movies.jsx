/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Movies.jsx
   Version: I
   Creation: 04/06/2023
   Last modification: 05/06/2023
*/

import styles from './Movies.module.css'

// components
import LCards from './../lcards/LCards'

// media
import m1 from '../../assets/media/p1.jpeg';
import m2 from '../../assets/media/p2.jpeg';
import m3 from '../../assets/media/p3.jpeg';
import m4 from '../../assets/media/p4.jpeg';
import m5 from '../../assets/media/p5.jpeg';

const Movies = () => {
    const bigcards = [
        { img: m1, title: 'm1' },
        { img: m2, title: 'm2' },
        { img: m3, title: 'm3' },
        { img: m4, title: 'm4' },
        { img: m5, title: 'm5' }
    ]

    return (
        <div className={styles.view}>
            {bigcards.map((item) => (
                <LCards img={item.img} title={item.title} />
            ))}
        </div>
    )
}

export default Movies