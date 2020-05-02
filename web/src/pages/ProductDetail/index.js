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

const ProductDetail = ({ actual_product, getProductDetails }) => {
  let { name } = useParams();

  const getProduct = useCallback(getProductDetails, []);

  useEffect(() => {
    getProduct(name);
  }, [getProduct, name]);

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
              {actual_product.on_sale ? actual_product.actual_price : actual_product.regular_price}
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
          <Button>Adicionar à Sacola</Button>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
