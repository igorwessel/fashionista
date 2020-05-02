import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { connect } from 'react-redux';
import { closeCartPanel } from 'reducers/ui/action-creators';
import {
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
} from 'reducers/cart/action-creators';

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

const CartPanel = ({
  closeCart,
  cart,
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <Sidebar>
      <CartContainer>
        <CartHeader>
          <MdArrowBack
            size={24}
            onClick={closeCart}
            style={{ cursor: 'pointer' }}
          />
          <CartTitle>Sacola ({cart.length})</CartTitle>
        </CartHeader>
        <ProductContainer>
          <ProductList>
            {cart.map((product) => (
              <ProductItem>
                <ContainerColumn>
                  <ProductImage>
                    <Photo src={product.image} />
                  </ProductImage>
                  <RemoveText onClick={() => removeProduct(product.id)}>
                    Remover Item
                  </RemoveText>
                </ContainerColumn>
                <ContainerColumn>
                  <ProductName>{product.name}</ProductName>
                  <TextMargin10>
                    Tam.: {product.sizes.map(({ size }) => size).join(', ')}
                  </TextMargin10>
                  <Container>
                    <Button onClick={() => decreaseQuantity(product.id)}>
                      -
                    </Button>
                    <Text>{product.quantity}</Text>
                    <Button onClick={() => increaseQuantity(product.id)}>
                      +
                    </Button>
                  </Container>
                </ContainerColumn>
                <ProductPrice>
                  <Price>{product.price}</Price>
                  <Installments>{product.installments}</Installments>
                </ProductPrice>
              </ProductItem>
            ))}
          </ProductList>
        </ProductContainer>
      </CartContainer>
    </Sidebar>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  closeCart: () => dispatch(closeCartPanel()),
  removeProduct: (id) => dispatch(removeProduct(id)),
  increaseQuantity: (id) => dispatch(increaseQuantity(id)),
  decreaseQuantity: (id) => dispatch(decreaseQuantity(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPanel);
