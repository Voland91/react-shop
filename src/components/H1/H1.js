import React from 'react';
import styles from './H1.module.css';

function H1(props) {
    return (
        <h1 className={styles.headerBig}>{props.header}</h1>
    )
};

export default H1;
