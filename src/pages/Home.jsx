/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Home.jsx
   Version: I
   Creation: 04/06/2023
   Last modification: 04/06/2023
*/

import React, { useState } from 'react';
import Headline from '../components/headline/Headline';
import Slides from '../components/slides/Slides';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styles from './Home.module.css';
import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.png';
import c4 from '../assets/c4.png';
import c5 from '../assets/c5.png';

const Home = () => {
  const [imgSlide, setImgSlide] = useState(0);

  const slides = [
    { img: c1 },
    { img: c2 },
    { img: c3 },
    { img: c4 },
    { img: c5 }
  ];

  const prevSld = () => {
    const prevSlide = imgSlide === 0 ? slides.length - 1 : imgSlide - 1;
    setImgSlide(prevSlide);
  };

  const nextSld = () => {
    const nextSlide = imgSlide === slides.length - 1 ? 0 : imgSlide + 1;
    setImgSlide(nextSlide);
  };

  return (
    <div className={styles.main}>
      <Headline />
      <div className={styles.carousel}>
        <div className={styles.left} onClick={prevSld}>
          <IoIosArrowBack className={styles.arrows} />
        </div>
        <div className={styles.right} onClick={nextSld}>
          <IoIosArrowForward className={styles.arrows} />
        </div>
        <div className={styles.imgSlide}>
          <Slides slides={slides} imgSlide={imgSlide} />
        </div>
      </div>
    </div>
  );
};

export default Home;