import React from 'react';
import styles from './H2.module.css';

const H2 = (props) =>
    (
        <h2 className={styles.headerSmall}>{props.small}</h2>
    );

export default H2;
