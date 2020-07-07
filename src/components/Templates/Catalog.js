import React, { useState } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import Modal from "../Views/Modal";
import Title from "../Atoms/Title";
import Product from "../Molecules/Product";
import Filter from "../Organisms/Filter";

const StyledCatalogWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const StyledProductsWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
`;

const StyledSearchWrapper = styled.div`
  margin-top: 5px;
  margin-right: 5px;
`;

const Catalog = ({ products, addToCart }) => {
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");

  const searchingProduct = (event) => {
    setSearch(event.target.value);
    setValue(event.target.value);
  };

  const clearSearch = (event) => {
    event.preventDefault();
    setSearch("");
    setValue("");
  };

  const filter = (event) => {
    setSearch(event.target.value);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      product.manufacture.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );

  return (
    <>
      <Title>Catalog</Title>
      <StyledCatalogWrapper>
        <StyledSearchWrapper>
          <Filter
            searchFn={searchingProduct}
            clearFn={clearSearch}
            value={value}
            filterFn={filter}
            products={products}
          />
        </StyledSearchWrapper>
        <StyledProductsWrapper>
          {filteredProducts.map((item) => (
            <Product
              image={item.image}
              amount={item.amount}
              name={item.name}
              manufacture={item.manufacture}
              key={item.id}
              id={item.id}
              addToCart={addToCart}
              catalog
            />
          ))}
        </StyledProductsWrapper>
      </StyledCatalogWrapper>

      <Switch>
        <Route path="/catalog/modal">
          <Modal />
        </Route>
      </Switch>
    </>
  );
};

export default Catalog;
