import React from 'react';
import styles from './H1.module.css';

const H1 = (props) =>
    (
        <h1 className={styles.headerBig}>{props.header}</h1>
    );

export default H1;
