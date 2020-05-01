import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { openCartPanel, openSearchPanel } from 'reducers/ui/action-creators';
import { MdSearch } from 'react-icons/md';
import { FiShoppingBag } from 'react-icons/fi';
import {
  Container,
  Title,
  ButtonWithIcon,
  BagItem,
  ActionsContainer,
} from './styled';
import SearchPanel from 'components/SearchPanel';
import CartPanel from 'components/CartPanel';

const Header = ({ ui: { cartPanel, searchPanel }, openCart, openSearch }) => {
  return (
    <Container>
      {cartPanel && <CartPanel />}
      {searchPanel && <SearchPanel />}
      <Link to="/">
        <Title>Fashionista</Title>
      </Link>
      <ActionsContainer>
        <ButtonWithIcon>
          <MdSearch size={24} color="black" onClick={openSearch} />
        </ButtonWithIcon>
        <ButtonWithIcon>
          <FiShoppingBag size={24} color="black" onClick={openCart} />
          <BagItem onClick={openCart}>1</BagItem>
        </ButtonWithIcon>
      </ActionsContainer>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  openCart: () => dispatch(openCartPanel()),
  openSearch: () => dispatch(openSearchPanel()),
});

const mapStateToProps = (state) => ({
  ui: state.ui,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
