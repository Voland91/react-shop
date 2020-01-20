import React from 'react';
import styles from './Product.module.css';

const Product = (props) => (
    <div className={styles.product}>
        <img src={props.image} alt={props.manufacture + " " + props.name} />
        <p className={styles.price}>{props.amount}</p>
        <h3>{props.name}</h3>
    </div>
);

export default Product;