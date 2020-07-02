import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Title from "../Atoms/Title";
import Product from "../Molecules/Product";

const StyledProductsWrapper = styled.div`
  display: flex;
`;

class Home extends React.Component {
  render() {
    // const { products } = this.props;
    const products = this.state.productList[0];
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
                />
              )
          )}
          {console.log(products[0])}
          {console.log(this.state)}
        </StyledProductsWrapper>
      </>
    );
  }
}

export default connect()(Home);
