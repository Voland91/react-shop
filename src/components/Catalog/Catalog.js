import React from 'react';
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer';
import H1 from '../H1/H1';
import Container from '../Container/Container';
import ColumnLeft from '../ColumnLeft/ColumnLeft';
import ColumnRight from '../ColumnRight/ColumnRight';
import CatalogContainer from '../CatalogContainer/CatalogContainer';
import Product from '../Product/Product';
import Products from '../Products/Products';
import Filter from '../Filter/Filter';
import productsData from '../../products.json';


class Catalog extends React.Component {

    state = {
        search: "",
        value: ""
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
    }

    clearFilter = (event) => {
        this.setState({ search: event.target.value });
    }

    render() {

        const { search } = this.state;
        const filteredProducts = productsData.filter(product => (product.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 || product.manufacture.toLowerCase().indexOf(search.toLowerCase()) !== -1));

        return (<>
            <Navigation />
            <Container>
                <H1 header="Catalog" />

                <CatalogContainer>
                    <ColumnLeft>
                        <Filter
                            searchFn={this.searchingProduct}
                            clearFn={this.clearSearch}
                            value={this.state.value}
                            filterFn={this.filter}
                        />
                    </ColumnLeft>

                    <ColumnRight>
                        <Products>
                            {filteredProducts.map((item) =>
                                < Product
                                    image={item.image}
                                    amount={item.amount}
                                    name={item.name}
                                    manufacture={item.manufacture}
                                    key={item.id}
                                />)
                            }
                        </Products>
                    </ColumnRight>
                </CatalogContainer>

            </Container>
            <Footer />
        </>)
    }
};

export default Catalog;
