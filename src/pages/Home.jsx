/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Home.jsx
   Version: I
   Creation: 04/06/2023
   Last modification: 05/06/2023
*/

import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// components
import New from '../components/new/New';
import Comedy from '../components/comedy/Comedy';
import Movies from '../components/movies/Movies';
import Headline from '../components/headline/Headline';
import Slides from '../components/slides/Slides';
import Logos from '../components/animations/Logos';
import Note from '../components/note/Note';

// carousel media
import c1 from '../assets/media/c1.png';
import c2 from '../assets/media/c2.png';
import c3 from '../assets/media/c3.png';
import c4 from '../assets/media/c4.png';
import c5 from '../assets/media/c5.png';

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
    setImgSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSld, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
        <div className={styles.imgSlides}>
          <Slides slides={slides} imgSlide={imgSlide} />
        </div>
      </div>
      <Logos />
      <h3 style={{ textAlign: 'left' }}>Novedades en Disney+</h3>
      <New />
      <h3 style={{ textAlign: 'left' }}>Comedias</h3>
      <Comedy />
      <h3 style={{ textAlign: 'left' }}>Películas principales</h3>
      <Movies />
      <div style={styles.footer}></div>
      <Note />
    </div>
  );
}

export default Home;
