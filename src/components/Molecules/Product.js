import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Price from '../Atoms/Price';
import Image from '../Atoms/Image';
import Name from '../Atoms/Name';
import Button from '../Atoms/Button';

const StyledProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  margin: 5px;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  flex: 1 0 23%;
  padding: 5px;

  ${({ catalog }) =>
    catalog &&
    css`
      margin: 5px;
      max-width: 23%;
      flex-wrap: wrap;
    `};
`;

const StyledImageWrapper = styled.div`
  overflow: hidden;
  height: 180px;
  padding-top: 10px;

  ${({ catalog }) =>
    catalog &&
    css`
      height: 140px;
    `}
`;

const Product = ({ id, catalog, manufacture, name, image, amount, addToCart }) => (
  <StyledProductWrapper catalog={catalog}>
    <StyledImageWrapper catalog={catalog}>
      <Image src={image} alt={`${manufacture} ${name}`} />
    </StyledImageWrapper>
    <Price>{`${amount} $`}</Price>
    <Name>{name}</Name>
    <Button cartSmall onClick={() => addToCart(id)}>
      add to cart
    </Button>
  </StyledProductWrapper>
);

Product.propTypes = {
  id: PropTypes.string.isRequired,
  catalog: PropTypes.bool,
  manufacture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
};

Product.defaultProps = {
  catalog: false,
};

export default Product;
