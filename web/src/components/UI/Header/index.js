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
import Sidebar from '../Sidebar';
import SearchPanel from 'components/SearchPanel';

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  return (
    <Container>
      <Link to="/">
        <Title>Fashionista</Title>
      </Link>
      {openSearch && (
        <Sidebar open={openSearch}>
          <SearchPanel open={setOpenSearch} />
        </Sidebar>
      )}
      <ActionsContainer>
        <ButtonWithIcon>
          <MdSearch
            size={24}
            color="black"
            onClick={(e) => setOpenSearch(true)}
          />
        </ButtonWithIcon>
        <ButtonWithIcon>
          <FiShoppingBag size={24} color="black" />
          <BagItem>1</BagItem>
        </ButtonWithIcon>
      </ActionsContainer>
    </Container>
  );
};

export default Header;
