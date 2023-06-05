/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: HeadlineEl.jsx
   Version: I
   Creation: 04/06/2023
   Last modification: 04/06/2023
*/

import React from 'react'
import styles from './HeadlineEl.module.css'

const HeadlineE = ({ name, Icon }) => {
  return (
    <div className={styles.menuItems}>
        <Icon className={styles.icon}/>
        <span className={styles.item}>{name}</span>
    </div>
  )
}

export default HeadlineE