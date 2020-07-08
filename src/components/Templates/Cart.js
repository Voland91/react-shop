import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addToCart, removeFromCart, clearCart, clearItem } from '../../data/actions/cartAction';

import CartItems from '../Molecules/CartItems';
import Button from '../Atoms/Button';
import Title from '../Atoms/Title';
import Text from '../Atoms/Text';
import icon from '../../assets/trash-alt-solid.svg';

const StyledCartWrapper = styled.aside`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const StyledContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
  width: 600px;
  max-height: 700px;
  box-shadow: 0px 0px 20px -5px rgba(11, 16, 43, 1);
  display: flex;
  flex-direction: column;
  overflow-x: auto;
`;

const StyledNavWrapper = styled.div`
  display: flex;
  align-self: flex-end;
`;

const StyledEmptyCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  align-items: center;
`;

const StyledFullCartWrapper = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  padding-left: 20px;
  padding-right: 40px;
  justify-content: space-between;
  width: 100%;
`;

const DeleteButton = styled(Button)`
  background: url(${icon});
  background-repeat: no-repeat;
  background-color: transparent;
  height: 18px;
  width: 18px;
`;

// eslint-disable-next-line no-shadow
const Cart = ({ products, cart, addToCart, removeFromCart, clearCart, clearItem }) => {
  const history = useHistory();
  const handleClose = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <StyledCartWrapper onClick={handleClose}>
      <StyledContentWrapper onClick={(e) => e.stopPropagation()}>
        <StyledNavWrapper>
          <Button onClick={() => clearCart()}>wyczyść koszyk</Button>
          <Button cartSmall close onClick={handleClose}>
            X
          </Button>
        </StyledNavWrapper>
        {cart.items.reduce((prev, cur) => {
          return prev + cur.count;
        }, 0) === 0 ? (
          <StyledEmptyCartWrapper key={1}>
            <Title cart>Twój koszyk jest pusty</Title>
            <Button cartSmall onClick={handleClose}>
              dodaj produkty
            </Button>
          </StyledEmptyCartWrapper>
        ) : (
          cart.items.map(
            (item) =>
              item.count > 0 &&
              products.map(
                (product) =>
                  item.id === product.id && (
                    <StyledFullCartWrapper key={item.id}>
                      <CartItems
                        image={product.image}
                        manufacture={product.manufacture}
                        name={product.name}
                      />
                      <Text>{`${product.category} ${product.name}`}</Text>
                      <Text cart>{`${(item.count * product.amount).toFixed(2)} $`}</Text>
                      <Button
                        cartSmall
                        close
                        onClick={() => removeFromCart(item.id)}
                        disabled={item.count <= 1}
                      >
                        -
                      </Button>
                      <Text>{item.count}</Text>
                      <Button cartSmall close onClick={() => addToCart(item.id)}>
                        +
                      </Button>
                      <DeleteButton onClick={() => clearItem(item.id)} />
                    </StyledFullCartWrapper>
                  ),
              ),
          )
        )}
      </StyledContentWrapper>
    </StyledCartWrapper>
  );
};

Cart.propTypes = {
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
  clearItem: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape).isRequired,
  cart: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default connect(null, {
  addToCart,
  removeFromCart,
  clearCart,
  clearItem,
})(Cart);
