import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from 'services/catalog';
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

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let response = await getProducts();
      setProducts(response.products);
    };

    fetchProducts();
  }, []);

  return (
    <Fragment>
      <Header />
      <Container>
        {products.length} items
        <Catalog>
          {products.map((product, index) => (
            <Product key={product.name + '_' + index}>
              <Link
                to={`/produto/${product.name
                  .toLowerCase()
                  .replace(/\s+/gm, '-')}`}
                style={{ color: '#aaa' }}
              >
                <ProductPhoto>
                  {product.discount_percentage && (
                    <ProductDiscount>
                      {product.discount_percentage}
                    </ProductDiscount>
                  )}
                  {product.image ? (
                    <Photo src={product.image} />
                  ) : (
                    'Imagem indisponivel'
                  )}
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

export default Home;
