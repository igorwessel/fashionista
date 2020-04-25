import React from 'react';
import { MdSearch } from 'react-icons/md';
import { FiShoppingBag } from 'react-icons/fi';
import { Container, Title, ButtonWithIcon, BagItem } from './styled';

const Header = () => {
  return (
    <Container>
      <Title>Fashionista</Title>
      <div className="header_actions">
        <ButtonWithIcon>
          <MdSearch size={24} color="black" />
        </ButtonWithIcon>
        <ButtonWithIcon>
          <FiShoppingBag size={24} color="black" />
          <BagItem>2</BagItem>
        </ButtonWithIcon>
      </div>
    </Container>
  );
};

export default Header;
