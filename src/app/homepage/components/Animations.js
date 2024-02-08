import React from "react"; 
import styles from './Animations.module.css';
// import styled,{keyframes} from "styled-components";
const Animations = () => {
    
    return (
        <div className={styles.animes}>
            <div className={styles.first}><div>27 EDITIONS</div></div>
            <div className={styles.second}><div>140K FOOTFALL</div></div>
            <div className={styles.third}><div>100+ EVENTS</div></div>
            <div className={styles.fourth}><div>500+ COLLEGES</div></div>

        </div>
    );
}
export default Animations;