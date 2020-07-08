import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from './Button';
import icon from '../../assets/shopping-cart.svg';

const LinkButton = styled(Button)`
  background: url(${icon});
  background-repeat: no-repeat;
  background-color: transparent;
  height: 24px;
  width: 24px;
`;

const CartButton = ({ to }) => (
  <Link to={to}>
    <LinkButton />
  </Link>
);

CartButton.propTypes = {
  to: PropTypes.string,
};

CartButton.defaultProps = {
  to: '',
};

export default CartButton;
