/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Note.jsx
   Version: I
   Creation: 04/06/2023
   Last modification: 05/06/2023
*/

import styles from './Note.module.css'
import logo from '../../assets/logos/disneyIcon.svg';

const Note = () => {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                <img src={logo} className={styles.icon} />
            </div>
            <div className={styles.links}>
                <div className={styles.touchable}>
                    <span>Política de privacidad</span>
                    <span>Acuerdo de suscripción</span>
                    <span>Ayuda</span>
                    <span>Dispositivos compatibles</span>
                </div>
                <div className={styles.touchable}>
                    <span>Acerca de Disney+</span>
                    <span>Publicidad personalizada</span>
                </div>
            </div>
            <div className={styles.copyrigth}>
                <div className={styles.text}>
                    El servicio Disney+ es comercializado por Disney DTC LATAM, Inc., 2400 W Alameda Ave., Burbank CA 91521 y Tax ID 75-3016153.
                </div>
            </div>
            <div className={styles.copyrigth}>
                <div className={styles.text}>
                    © Disney. Todos los derechos reservados.
                </div>
            </div>
        </div>
    )
}

export default Note;