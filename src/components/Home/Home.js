import React from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import H1 from '../H1/H1';
import H2 from '../H2/H2';
import Container from '../Container/Container';
import Product from '../Product/Product';
import Products from '../Products/Products';
import productsData from '../../products.json';

const Home = () => (
    <>
        <Navigation />
        <Container>
            <H1 header="Welcome to our store" />
            <H2 small="Desktops" />
            <Products>
                {productsData.map(item => (
                    (item.featured === true && item.category === "desktop") ?
                        (< Product
                            image={item.image}
                            amount={item.amount}
                            name={item.name}
                            manufacture={item.manufacture}
                            key={item.id}
                        />) : null
                ))}
            </Products>
            <H2 small="Tablets" />
            <Products>
                {productsData.map(item => (
                    (item.featured === true && item.category === "tablet") ?
                        < Product
                            image={item.image}
                            amount={item.amount}
                            name={item.name}
                            manufacture={item.manufacture}
                            key={item.id}
                        /> : null
                ))}
            </Products>
        </Container>
        <Footer />
    </>
);

export default Home;
