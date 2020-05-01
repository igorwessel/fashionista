import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts } from 'reducers/inventory/action-creators';
import {
  Container,
  Catalog,
  Product,
  ProductPhoto,
  Photo,
  ProductName,
  ProductValue,
  ProductDiscount,
  ProductOldValue,
} from './styled';
import Header from 'components/UI/Header';

const Home = ({ getAllProducts, products }) => {
  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <Fragment>
      <Header />
      <Container>
        {products.length} items
        <Catalog>
          {products.map((product, index) => (
            <Product key={product.name + '_' + index}>
              <Link
                to={`/produto/${product.name.toLowerCase().replace(/\s+/gm, '-')}`}
                style={{ color: '#aaa' }}
              >
                <ProductPhoto>
                  {product.discount_percentage && (
                    <ProductDiscount>{product.discount_percentage}</ProductDiscount>
                  )}
                  {product.image ? <Photo src={product.image} /> : 'Imagem indisponivel'}
                </ProductPhoto>
                <ProductName>{product.name}</ProductName>
                {product.actual_price !== product.regular_price && (
                  <ProductOldValue>{product.regular_price}</ProductOldValue>
                )}
                <ProductValue>{product.actual_price}</ProductValue>
              </Link>
            </Product>
          ))}
        </Catalog>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  products: state.inventory.products,
});

const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(getAllProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
