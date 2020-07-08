import React from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import Cart from '../Templates/Cart';

const Modal = ({ products, cart }) =>
  createPortal(
    <Cart products={products} cart={cart} />,
    // eslint-disable-next-line no-undef
    document.querySelector('#modal'),
  );

export default connect((state) => {
  return {
    cart: state.cart,
  };
})(Modal);
