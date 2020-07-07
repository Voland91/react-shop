import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../../Theme/GlobalStyle";
import { theme } from "../../Theme/mainTheme";

import { connect } from "react-redux";
import { fetchProducts } from "../../data/actions/productsAction";
import { addToCart } from "../../data/actions/cartAction";

import Home from "../Templates/Home";
import Catalog from "../Templates/Catalog";
import About from "../Templates/About";
import Navigation from "../Organisms/Navigation";
import Footer from "../Organisms/Footer";

const StyledWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: ${({ theme }) => theme.gray};
`;

const StyledConetentWrapper = styled.div`
  flex: 1;
  width: 100%;
  max-width: 970px;
  padding: 0 15px;
  margin: 0 auto;
`;

const Root = ({ products, fetchProducts, cart, addToCart }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <StyledWrapper>
            <Navigation cart={cart} />
            <StyledConetentWrapper>
              <Switch>
                <Route exact path="/">
                  <Home products={products} addToCart={addToCart} />
                </Route>
                <Route path="/catalog">
                  <Catalog products={products} addToCart={addToCart} />
                </Route>
                <Route path="/about" component={About} />
                <Route path="/home">
                  <Home products={products} addToCart={addToCart} />
                </Route>
              </Switch>
            </StyledConetentWrapper>
            <Footer />
          </StyledWrapper>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default connect(
  (state) => {
    console.log(state.cart);
    return {
      products: state.products.products,
      cart: state.cart.itemsCount,
    };
  },
  { fetchProducts, addToCart }
)(Root);