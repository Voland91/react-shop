import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CartButton from '../Atoms/CartButton';
import Text from '../Atoms/Text';
import icon from '../../assets/shopping-cart.svg';

const StyledWrapper = styled.div`
  position: relative;
  min-height: 50px;
  background-color: ${({ theme }) => theme.dark};
  display: flex;
  justify-content: center;
`;

const StyledNavWrap = styled.div`
  display: flex;
  width: ${({ theme }) => theme.mainWidth};
`;

const StyledListWrapper = styled.div`
  display: flex;
  overflow: hidden;
  list-style-type: none;
  flex: 1;
`;

const StyledItemWrapper = styled.li`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.regular};
  padding: 15px 40px 15px 0;

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.white};
  }
`;

const StyledCartButtonWrapper = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
`;

const Navigation = ({ cart }) => {
  const history = useHistory();
  const actualUrl = history.location.pathname;

  return (
    <StyledWrapper>
      <StyledNavWrap>
        <StyledListWrapper>
          <StyledItemWrapper>
            <Link to="/">Home</Link>
          </StyledItemWrapper>
          <StyledItemWrapper>
            <Link to="/catalog">Catalog</Link>
          </StyledItemWrapper>
          <StyledItemWrapper>
            <Link to="/about">About</Link>
          </StyledItemWrapper>
        </StyledListWrapper>
        <StyledCartButtonWrapper>
          <CartButton to={actualUrl === '/' ? 'home/modal' : `${actualUrl}/modal`} src={icon} />
          <Text cart>
            {cart.items.reduce((prev, cur) => {
              return prev + cur.count;
            }, 0)}
          </Text>
        </StyledCartButtonWrapper>
      </StyledNavWrap>
    </StyledWrapper>
  );
};

Navigation.propTypes = {
  cart: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default Navigation;
