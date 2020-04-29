import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  return (
    <Container>
      <Link to="/">
        <Title>Fashionista</Title>
      </Link>
      {openSearch && <SearchPanel isOpen={openSearch} open={setOpenSearch} />}
      {openCart && <CartPanel isOpen={openCart} open={setOpenCart} />}
      <ActionsContainer>
        <ButtonWithIcon>
          <MdSearch
            size={24}
            color="black"
            onClick={(e) => setOpenSearch(true)}
          />
        </ButtonWithIcon>
        <ButtonWithIcon>
          <FiShoppingBag
            size={24}
            color="black"
            onClick={() => setOpenCart(true)}
          />
          <BagItem>1</BagItem>
        </ButtonWithIcon>
      </ActionsContainer>
    </Container>
  );
};

export default Header;
