/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: New.jsx
   Version: I
   Creation: 04/06/2023
   Last modification: 04/06/2023
*/

import styles from './New.module.css'

// components
import Cards from '../../cards/Cards';

// media
import indj1 from '../../assets/media/nav1.jpeg';
import indj2 from '../../assets/media/nav2.jpeg';
import indj3 from '../../assets/media/nav3.jpeg';
import indj4 from '../../assets/media/nav4.jpeg';
import chin from '../../assets/media/nav5.jpeg';

const New = ( { index } ) => {
    const rec0 = [
        { img: indj1, title: 'indj1' },
        { img: indj2, title: 'indj2' },
        { img: indj3, title: 'indj3' },
        { img: indj4, title: 'indj4' },
        { img: chin, title: 'chin' }
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

export default New