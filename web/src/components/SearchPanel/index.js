import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { MdArrowBack } from 'react-icons/md';
import {
  PanelContainer,
  InputContainer,
  SearchContainer,
  SearchInput,
  SearchDetails,
  SearchTitle,
  ProductContainer,
  ProductList,
  ProductItem,
  ProductImage,
  ProductName,
  ProductPrice,
  Photo,
  Price,
  Installments,
} from './styled';
import Sidebar from 'components/UI/Sidebar';

import { closeSearchPanel } from 'reducers/ui/action-creators';
import { filterByName } from 'reducers/inventory/action-creators';

const SearchPanel = ({ closeSearch, filtered, filterByName }) => {
  const [query, setQuery] = useState();
  useMemo(() => {
    if (query === '' || query === undefined) {
      return;
    }
    filterByName(query);
  }, [query, filterByName]);

  return (
    <Sidebar>
      <PanelContainer>
        <SearchContainer>
          <SearchDetails>
            <MdArrowBack size={24} onClick={closeSearch} style={{ cursor: 'pointer' }} />
            <SearchTitle>Buscar Produtos</SearchTitle>
          </SearchDetails>
          <InputContainer>
            <SearchInput
              type="text"
              placeholder="Digite aqui"
              onChange={(e) => setQuery(e.target.value)}
            />
          </InputContainer>
        </SearchContainer>
        <ProductContainer>
          {filtered.length} items
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
        </ProductContainer>
      </PanelContainer>
    </Sidebar>
  );
};

const mapStateToProps = (state) => ({
  filtered: state.inventory.filtered,
});

const mapDispatchToProps = (dispatch) => ({
  closeSearch: () => dispatch(closeSearchPanel()),
  filterByName: (name) => dispatch(filterByName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
