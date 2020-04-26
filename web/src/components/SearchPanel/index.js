import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import {
  PanelContainer,
  InputContainer,
  ProductContainer,
  SearchContainer,
  SearchInput,
  SearchDetails,
  SearchTitle,
  ProductList,
  ProductItem,
  ProductImage,
  ProductName,
  ProductPrice,
  Price,
  Installments,
  Photo,
} from './styled';

const SearchPanel = ({ open }) => {
  return (
    <PanelContainer>
      <SearchContainer>
        <SearchDetails>
          <MdArrowBack
            size={24}
            onClick={() => open(false)}
            style={{ cursor: 'pointer' }}
          />
          <SearchTitle>Buscar Produtos</SearchTitle>
        </SearchDetails>
        <InputContainer>
          <SearchInput type="text" placeholder="Digite aqui" />
        </InputContainer>
      </SearchContainer>
      <ProductContainer>
        4 items
        <ProductList>
          <ProductItem>
            <ProductImage>
              <Photo src="https://d3l7rqep7l31az.cloudfront.net/images/products/20001786_594_catalog_1.jpg?1449159646" />
            </ProductImage>
            <ProductName>CALÇA COMFORT TASSEL</ProductName>
            <ProductPrice>
              <Price>R$ 139,90</Price>
              <Installments>2x R$ 42,45</Installments>
            </ProductPrice>
          </ProductItem>
          <ProductItem>
            <ProductImage>
              <Photo src="https://d3l7rqep7l31az.cloudfront.net/images/products/20001786_594_catalog_1.jpg?1449159646" />
            </ProductImage>
            <ProductName>CALÇA COMFORT TASSEL</ProductName>
            <ProductPrice>
              <Price>R$ 139,90</Price>
              <Installments>2x R$ 42,45</Installments>
            </ProductPrice>
          </ProductItem>
          <ProductItem>
            <ProductImage>
              <Photo src="https://d3l7rqep7l31az.cloudfront.net/images/products/20001786_594_catalog_1.jpg?1449159646" />
            </ProductImage>
            <ProductName>CALÇA COMFORT TASSEL</ProductName>
            <ProductPrice>
              <Price>R$ 139,90</Price>
              <Installments>2x R$ 42,45</Installments>
            </ProductPrice>
          </ProductItem>
          <ProductItem>
            <ProductImage>
              <Photo src="https://d3l7rqep7l31az.cloudfront.net/images/products/20001786_594_catalog_1.jpg?1449159646" />
            </ProductImage>
            <ProductName>CALÇA COMFORT TASSEL</ProductName>
            <ProductPrice>
              <Price>R$ 139,90</Price>
              <Installments>2x R$ 42,45</Installments>
            </ProductPrice>
          </ProductItem>
          <ProductItem>
            <ProductImage>
              <Photo src="https://d3l7rqep7l31az.cloudfront.net/images/products/20001786_594_catalog_1.jpg?1449159646" />
            </ProductImage>
            <ProductName>CALÇA COMFORT TASSEL</ProductName>
            <ProductPrice>
              <Price>R$ 139,90</Price>
              <Installments>2x R$ 42,45</Installments>
            </ProductPrice>
          </ProductItem>
          <ProductItem>
            <ProductImage>
              <Photo src="https://d3l7rqep7l31az.cloudfront.net/images/products/20001786_594_catalog_1.jpg?1449159646" />
            </ProductImage>
            <ProductName>CALÇA COMFORT TASSEL</ProductName>
            <ProductPrice>
              <Price>R$ 139,90</Price>
              <Installments>2x R$ 42,45</Installments>
            </ProductPrice>
          </ProductItem>
          <ProductItem>
            <ProductImage>
              <Photo src="https://d3l7rqep7l31az.cloudfront.net/images/products/20001786_594_catalog_1.jpg?1449159646" />
            </ProductImage>
            <ProductName>CALÇA COMFORT TASSEL</ProductName>
            <ProductPrice>
              <Price>R$ 139,90</Price>
              <Installments>2x R$ 42,45</Installments>
            </ProductPrice>
          </ProductItem>
        </ProductList>
      </ProductContainer>
    </PanelContainer>
  );
};

export default SearchPanel;