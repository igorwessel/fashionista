import React, { useEffect, useState } from 'react';
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
} from './styled';

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let response = await getProducts();
      setProducts(response.products);
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      {products.length} items
      <Catalog>
        {products.map((product, index) => (
          <Product key={product.name + '_' + index}>
            <ProductPhoto>
              {product.discount_percentage && (
                <ProductDiscount>{product.discount_percentage}</ProductDiscount>
              )}
              {product.image ? (
                <Photo src={product.image} />
              ) : (
                'Imagem indisponivel'
              )}
            </ProductPhoto>
            <ProductName>{product.name}</ProductName>
            <ProductValue>{product.actual_price}</ProductValue>
          </Product>
        ))}
      </Catalog>
    </Container>
  );
};

export default Main;
