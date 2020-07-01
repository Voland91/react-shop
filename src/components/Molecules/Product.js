import React from "react";
import styled from "styled-components";
import Price from "../Atoms/Price";
import Image from "../Atoms/Image";
import Name from "../Atoms/Name";

const StyledProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  background: white;
  margin: 1%;
  text-align: center;
  justify-content: space-between;
  flex: 1 0 23%;
`;

const Product = (props) => (
  <StyledProductWrapper>
    <Image src={props.image} alt={props.manufacture + " " + props.name} />
    <Price>{props.amount}</Price>
    <Name>{props.name}</Name>
  </StyledProductWrapper>
);

export default Product;
