/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Logos.jsx
   Version: I
   Creation: 04/06/2023
   Last modification: 04/06/2023
*/

import Structure from './Structure'
import styles from './Logos.module.css'

// names
import disneyIcon from '../../assets/disn.png'
import pixarIcon from '../../assets/px.png'
import marvelIcon from '../../assets/marvel.png'
import starwarsIcon from '../../assets/sw.png'
import natgeoIcon from '../../assets/ng.png'

// animations vid
import diss from '../../assets/diss.mp4'
import marv from '../../assets/marv.mp4'
import ntg from '../../assets/ntg.mp4'
import sws from '../../assets/sws.mp4'
import pix from '../../assets/pix.mp4'

const Logos = () => {

    const cards = [
        { img: disneyIcon, title: 'dis', video: diss },
        { img: pixarIcon, title: 'pix', video: pix },
        { img: marvelIcon, title: 'mar', video: marv },
        { img: starwarsIcon, title: 'sws', video: sws },
        { img: natgeoIcon, title: 'ntg', video: ntg }
    ]

    return (
        <div className={styles.view}>
            {cards.map((item) => (
                <Structure img={item.img} title={item.title} video={item.video} />
            ))}
        </div>
    )
}

export default Logos