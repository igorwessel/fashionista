import styled from 'styled-components';

export const BGDark = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Container = styled.div`
  position: absolute;
  right: -0;
  display: flex;
  flex-direction: column;

  @media (max-width: 412px) {
    width: 100%;
  }
`;
