import React, { Fragment } from 'react';
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

const ProductDetail = () => {
  return (
    <Fragment>
      <Header />
      <Product>
        <PhotoContainer>
          <Photo
            src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912"
            alt=""
          />
        </PhotoContainer>
        <Details>
          <ProductName>VESTIDO TRANSPASSE BOW</ProductName>
          <Price>
            <PriceValue>R$ 199,90 </PriceValue>
            <PriceInstallments>em até 3x R$66,63</PriceInstallments>
          </Price>
          <Size>
            Escolha o tamanho
            <SizeList>
              <SizeItem>
                <ButtonWithoutBorder>P</ButtonWithoutBorder>
              </SizeItem>
              <SizeItem>
                <ButtonWithoutBorder>M</ButtonWithoutBorder>
              </SizeItem>
              <SizeItem>
                <ButtonWithoutBorder>G</ButtonWithoutBorder>
              </SizeItem>
            </SizeList>
          </Size>
          <Button>Adicionar à Sacola</Button>
        </Details>
      </Product>
    </Fragment>
  );
};

export default ProductDetail;
