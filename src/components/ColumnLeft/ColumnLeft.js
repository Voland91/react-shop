import React from 'react';
import styles from './ColumnLeft.module.css'

const ColumnLeft = (props) => (
    <>
        <div className={styles.columnLeft}>{props.children}</div>
    </>
);

export default ColumnLeft;