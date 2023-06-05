/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Headline.jsx
   Version: I
   Creation: 04/06/2023
   Last modification: 04/06/2023
*/

import HeadlineEl from './HeadlineEl';
import styles from './Headline.module.css';
import dIcon from '../../assets/disneyIcon.svg';
import profile from '../../assets/belle.png';
import { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';
import { GiFilmSpool } from 'react-icons/gi';
import { HiHome, HiStar } from 'react-icons/hi';
import { RiTvFill } from 'react-icons/ri';

const Headline = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menu = [
    {
      name: 'INICIO',
      icon: HiHome
    },
    {
      name: 'BÚSQUEDA',
      icon: BiSearch
    },
    {
      name: 'MI LISTA',
      icon: FaPlus
    },
    {
      name: 'ORIGINALES',
      icon: HiStar
    },
    {
      name: 'PELÍCULAS',
      icon: GiFilmSpool
    },
    {
      name: 'SERIES',
      icon: RiTvFill
    }
  ];

  return (
    <div className={`${styles.header} ${isScrolled ? styles['header--scrolled'] : ''}`}>
      <img src={dIcon} className={styles.dIcon} />
      <div className={styles.menu}>
        {menu.map((item, index) => (
          <HeadlineEl key={index} name={item.name} Icon={item.icon} />
        ))}
      </div>
      <div className={styles.user}>
        <p className={styles.username}>Sara</p>
        <img src={profile} className={styles.profile} />
      </div>
    </div>
  );
};

export default Headline;
