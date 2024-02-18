import React from "react"; 
import styles from './Animations.module.css';
// import styled,{keyframes} from "styled-components";
const Animations = () => {
    
    return (
        <div className={styles.animes}>
            <div className={styles.first}><div>28 EDITIONS</div></div>
            <div className={styles.first}><div>140K FOOTFALL</div></div>
            <div className={styles.first}><div>100+ EVENTS</div></div>
            <div className={styles.first}><div>500+ COLLEGES</div></div>
        </div>
    );
}
export default Animations;