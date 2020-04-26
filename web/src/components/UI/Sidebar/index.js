import React from 'react';
import { BGDark, Container } from './styled';

const Sidebar = ({ children }) => {
  return (
    <BGDark>
      <Container>{children}</Container>
    </BGDark>
  );
};

export default Sidebar;
