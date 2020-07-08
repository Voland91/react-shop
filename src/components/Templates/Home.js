import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Modal from '../Views/Modal';
import Title from '../Atoms/Title';
import Product from '../Molecules/Product';

const StyledProductsWrapper = styled.div`
  display: flex;
`;

const Home = ({ products, addToCart }) => (
  <>
    <Title>Welcome to our store</Title>
    <Title small>Desktops</Title>

    <StyledProductsWrapper>
      {products.map(
        (item) =>
          item.featured === true &&
          item.category === 'desktop' && (
            <Product
              image={item.image}
              amount={item.amount}
              name={item.name}
              manufacture={item.manufacture}
              key={item.id}
              addToCart={addToCart}
              id={item.id}
            />
          ),
      )}
    </StyledProductsWrapper>

    <Title small>Tablets</Title>
    <StyledProductsWrapper>
      {products.map(
        (item) =>
          item.featured === true &&
          item.category === 'tablet' && (
            <Product
              image={item.image}
              amount={item.amount}
              name={item.name}
              manufacture={item.manufacture}
              key={item.id}
              addToCart={addToCart}
              id={item.id}
            />
          ),
      )}
    </StyledProductsWrapper>
    <Switch>
      <Route path="/home/modal">
        <Modal products={products} />
      </Route>
    </Switch>
  </>
);

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Home;
