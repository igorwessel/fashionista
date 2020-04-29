import React from 'react';
import { BGDark, Container } from './styled';

const Sidebar = ({ children, isOpen }) => {
  return (
    <BGDark style={{ display: isOpen ? 'block' : 'none' }}>
      <Container>{children}</Container>
    </BGDark>
  );
};

export default Sidebar;
