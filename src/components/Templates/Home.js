import React from "react";
import styled from "styled-components";
import Title from "../Atoms/Title";
import Product from "../Molecules/Product";

const StyledProductsWrapper = styled.div`
  display: flex;
`;

const Home = ({ products, addToCart }) => {
  return (
    <>
      <Title>Welcome to our store</Title>
      <Title small>Desktops</Title>

      <StyledProductsWrapper>
        {products.map(
          (item) =>
            item.featured === true &&
            item.category === "desktop" && (
              <Product
                image={item.image}
                amount={item.amount}
                name={item.name}
                manufacture={item.manufacture}
                key={item.id}
                addToCart={addToCart}
              />
            )
        )}
      </StyledProductsWrapper>

      <Title small>Tablets</Title>
      <StyledProductsWrapper>
        {products.map(
          (item) =>
            item.featured === true &&
            item.category === "tablet" && (
              <Product
                image={item.image}
                amount={item.amount}
                name={item.name}
                manufacture={item.manufacture}
                key={item.id}
                addToCart={addToCart}
              />
            )
        )}
      </StyledProductsWrapper>
    </>
  );
};

export default Home;
