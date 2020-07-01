import React from "react";
import styled from "styled-components";
import Title from "../Atoms/Title";
import Product from "../Molecules/Product";
import productsData from "../../products.json";

const StyledProductsWrapper = styled.div`
  display: flex;
`;

const Home = () => (
  <>
    <Title>Welcome to our store</Title>
    <Title small>Desktops</Title>
    <StyledProductsWrapper>
      {productsData.map(
        (item) =>
          item.featured === true &&
          item.category === "desktop" && (
            <Product
              image={item.image}
              amount={item.amount}
              name={item.name}
              manufacture={item.manufacture}
              key={item.id}
            />
          )
      )}
    </StyledProductsWrapper>
    <Title small>Tablets</Title>
    <StyledProductsWrapper>
      {productsData.map(
        (item) =>
          item.featured === true &&
          item.category === "tablet" && (
            <Product
              image={item.image}
              amount={item.amount}
              name={item.name}
              manufacture={item.manufacture}
              key={item.id}
            />
          )
      )}
    </StyledProductsWrapper>
  </>
);

export default Home;
