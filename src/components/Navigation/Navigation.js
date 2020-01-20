import React from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';

const Navigation = () =>
    (
        <nav className={styles.navbar}>
            <Container>
                <ul className={styles.nav}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/catalog">Catalog</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </Container>
        </nav>
    );

export default Navigation;
