import React from "react";
import styled from "styled-components";
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
  margin-top: 7px;
`;

class Catalog extends React.Component {
  state = {
    search: "",
    value: "",
  };

  searchingProduct = (event) => {
    this.setState({ search: event.target.value, value: event.target.value });
  };

  clearSearch = (event) => {
    event.preventDefault();
    this.setState({ search: "", value: "" });
  };

  filter = (event) => {
    this.setState({ search: event.target.value });
  };

  clearFilter = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    const { products, addToCart } = this.props;
    const { search } = this.state;

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
              searchFn={this.searchingProduct}
              clearFn={this.clearSearch}
              value={this.state.value}
              filterFn={this.filter}
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
                addToCart={addToCart}
                catalog
              />
            ))}
          </StyledProductsWrapper>
        </StyledCatalogWrapper>
      </>
    );
  }
}

export default Catalog;
