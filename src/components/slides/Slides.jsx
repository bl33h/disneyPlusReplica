/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Slides.jsx
   Version: I
   Creation: 04/06/2023
   Last modification: 04/06/2023
*/

import styles from './Slides.module.css'

const Slides = ({ slides, imgSlide }) => {

    return (
        <div>
            <div className={styles.imgContainer}>
                <img src={slides[imgSlide].img} alt="title" className={styles.imgSlide}/>
            </div>
        </div>
    )
}

export default Slides