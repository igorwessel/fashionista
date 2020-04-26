import React from 'react';
import { MdSearch } from 'react-icons/md';
import { FiShoppingBag } from 'react-icons/fi';
import {
  Container,
  Title,
  ButtonWithIcon,
  BagItem,
  ActionsContainer,
} from './styled';

const Header = () => {
  return (
    <Container>
      <Title>Fashionista</Title>
      <ActionsContainer>
        <ButtonWithIcon>
          <MdSearch size={24} color="black" />
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
