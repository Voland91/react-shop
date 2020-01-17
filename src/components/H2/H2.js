import React from 'react';
import styles from './H2.module.css';

function H2(props) {
    return (
        <h2 className={styles.headerSmall}>{props.small}</h2>
    )
};

export default H2;
