import React from 'react';
import { BGDark, Container } from './styled';

const Sidebar = ({ children, open }) => {
  return (
    <BGDark style={{ display: open ? 'block' : 'none' }}>
      <Container>{children}</Container>
    </BGDark>
  );
};

export default Sidebar;
