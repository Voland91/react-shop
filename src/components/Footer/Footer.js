import React from 'react';
import styles from './Footer.module.css';
import Container from '../Container/Container';

const Footer = () => (
    <footer className={styles.footer}>
        <Container>
            <p>Shop © 2020 <br />Designed by Andrzej</p>
        </Container>
    </footer>
);

export default Footer;
