import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { connect } from 'react-redux';
import { closeCartPanel } from 'reducers/ui/action-creators';

import Sidebar from 'components/UI/Sidebar';
import {
  CartContainer,
  CartHeader,
  CartTitle,
  ProductContainer,
  ProductItem,
  ProductName,
  ProductPrice,
  ProductList,
  Price,
  Installments,
  ProductImage,
  Photo,
  RemoveText,
  Container,
  ContainerColumn,
  Button,
  TextMargin10,
  Text,
} from './styled';

const CartPanel = ({ closeCart }) => {
  return (
    <Sidebar>
      <CartContainer>
        <CartHeader>
          <MdArrowBack
            size={24}
            onClick={closeCart}
            style={{ cursor: 'pointer' }}
          />
          <CartTitle>Sacola (1)</CartTitle>
        </CartHeader>
        <ProductContainer>
          <ProductList>
            <ProductItem>
              <ContainerColumn>
                <ProductImage>
                  <Photo src="https://d3l7rqep7l31az.cloudfront.net/images/products/20001786_594_catalog_1.jpg?1449159646" />
                </ProductImage>
                <RemoveText>Remover Item</RemoveText>
              </ContainerColumn>
              <ContainerColumn>
                <ProductName>CALÇA COMFORT TASSEL</ProductName>
                <TextMargin10>Tam.: 40</TextMargin10>
                <Container>
                  <Button>-</Button>
                  <Text>1</Text>
                  <Button>+</Button>
                </Container>
              </ContainerColumn>
              <ProductPrice>
                <Price>R$ 139,90</Price>
                <Installments>2x R$ 42,45</Installments>
              </ProductPrice>
            </ProductItem>
          </ProductList>
        </ProductContainer>
      </CartContainer>
    </Sidebar>
  );
};

const mapDispatchToProps = (dispatch) => ({
  closeCart: () => dispatch(closeCartPanel()),
});

export default connect(null, mapDispatchToProps)(CartPanel);
