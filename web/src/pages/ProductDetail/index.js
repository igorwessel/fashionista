import React, { Fragment, useEffect, useCallback } from 'react';
import Header from 'components/UI/Header';
import {
  Product,
  ProductName,
  PhotoContainer,
  Photo,
  Price,
  PriceValue,
  PriceInstallments,
  Details,
  Size,
  SizeList,
  SizeItem,
  Button,
  ButtonWithoutBorder,
} from './styled';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from 'reducers/inventory/action-creators';
import { addProduct } from 'reducers/cart/action-creators';

const ProductDetail = ({ actual_product, getProductDetails, addProduct }) => {
  let { name } = useParams();

  const getProduct = useCallback(getProductDetails, []);

  const handleProduct = useCallback(
    () =>
      addProduct({
        id: actual_product.sizes[0].sku.substr(0, 4),
        name: actual_product.name,
        image: actual_product.image,
        quantity: 1,
        price: actual_product.actual_price,
        installments: actual_product.installments,
        sizes: actual_product.sizes.filter(({ available }) => available),
      }),
    [addProduct, actual_product]
  );

  useEffect(() => {
    getProduct(name);
  }, [getProduct, name, handleProduct]);

  return (
    <Fragment>
      <Header />
      <Product>
        <PhotoContainer>
          {actual_product.image ? (
            <Photo src={actual_product.image} alt="" />
          ) : (
            'Imagem indisponivel'
          )}
        </PhotoContainer>
        <Details>
          <ProductName>{actual_product.name}</ProductName>
          <Price>
            <PriceValue>
              {actual_product.on_sale
                ? actual_product.actual_price
                : actual_product.regular_price}
            </PriceValue>
            <PriceInstallments>{actual_product.installments}</PriceInstallments>
          </Price>
          <Size>
            Escolha o tamanho
            <SizeList>
              {actual_product.sizes
                ? actual_product.sizes.map(({ size, available }) => {
                    if (available) {
                      return (
                        <SizeItem key={size}>
                          <ButtonWithoutBorder>{size}</ButtonWithoutBorder>
                        </SizeItem>
                      );
                    }
                  })
                : ''}
            </SizeList>
          </Size>
          <Button onClick={handleProduct}>Adicionar à Sacola</Button>
        </Details>
      </Product>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  actual_product: state.inventory.actual_product,
});

const mapDispatchToProps = (dispatch) => ({
  getProductDetails: (name) => dispatch(getProductDetails(name)),
  addProduct: (product) => dispatch(addProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
