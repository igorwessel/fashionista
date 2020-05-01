import React, { useMemo } from 'react';
import {
  ProductList,
  ProductItem,
  ProductImage,
  ProductName,
  ProductPrice,
  Photo,
  Price,
  Installments,
} from './styled';
import { connect } from 'react-redux';

const ProductFilteredList = ({ filtered }) => {
  return (
    <ProductList>
      {filtered.map((product, index) => (
        <ProductItem key={product.style + index}>
          <ProductImage>
            {product.image ? <Photo src={product.image} /> : 'Imagem indisponivel'}
          </ProductImage>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>
            <Price>{product.actual_price}</Price>
            <Installments>{product.installments}</Installments>
          </ProductPrice>
        </ProductItem>
      ))}
    </ProductList>
  );
};

const mapStateToProps = (state) => ({
  filtered: state.inventory.filtered,
});

export default connect(mapStateToProps)(ProductFilteredList);
