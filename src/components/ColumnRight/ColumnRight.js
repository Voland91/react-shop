import React from 'react';
import styles from './ColumnRight.module.css'

const ColumnRight = (props) => (
    <div className={styles.columnRight}>{props.children}</div>
);

export default ColumnRight;