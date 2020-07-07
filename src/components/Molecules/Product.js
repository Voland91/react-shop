import React from "react";
import styled, { css } from "styled-components";
import Price from "../Atoms/Price";
import Image from "../Atoms/Image";
import Name from "../Atoms/Name";
import Button from "../Atoms/Button";

const StyledProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  margin: 1%;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  flex: 1 0 23%;
  padding: 5px;

  ${({ catalog }) =>
    catalog &&
    css`
      margin: 5px;
      width: 162px;
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

const Product = ({
  id,
  catalog,
  manufacture,
  name,
  image,
  amount,
  addToCart,
}) => (
  <StyledProductWrapper catalog={catalog}>
    <StyledImageWrapper catalog={catalog}>
      <Image src={image} alt={manufacture + " " + name} />
    </StyledImageWrapper>
    <Price>{`${amount} $`}</Price>
    <Name>{name}</Name>
    <Button cartSmall onClick={() => addToCart(id)}>
      dodaj do koszyka
    </Button>
  </StyledProductWrapper>
);

export default Product;
