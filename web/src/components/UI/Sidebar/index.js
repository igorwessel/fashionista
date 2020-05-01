import React from 'react';
import { BGDark, Container } from './styled';
import { connect } from 'react-redux';

const Sidebar = ({ children, ui: { cartPanel, searchPanel } }) => {
  return (
    <BGDark style={{ display: cartPanel || searchPanel ? 'flex' : 'none' }}>
      <Container>{children}</Container>
    </BGDark>
  );
};

const mapStateToProps = (state) => ({
  ui: state.ui,
});

export default connect(mapStateToProps)(Sidebar);
