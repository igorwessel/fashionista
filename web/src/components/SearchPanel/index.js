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
} from './styled';
import Sidebar from 'components/UI/Sidebar';

import { closeSearchPanel } from 'reducers/ui/action-creators';
import ProductFilteredList from 'components/ProductFilteredList';
import { filterByName } from 'reducers/inventory/action-creators';

const SearchPanel = ({ closeSearch, filtered, filterByName }) => {
  const [query, setQuery] = useState();
  const filter = useMemo(() => filterByName(query), [query, filterByName]);

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
          <ProductFilteredList />
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
