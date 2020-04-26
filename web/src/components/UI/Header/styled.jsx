import styled from 'styled-components';
import { device, size } from 'styles/media';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 60px);
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 50px;
  z-index: 2;
  align-items: center;
  box-shadow: -1px 0 5px rgba(0, 0, 0, 0.2);
  background-color: #fff;

  @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    width: calc(100% - 10px);
    padding: 0 5px;
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-family: 'Playfair Display', sans-serif;
  font-weight: 600;
  margin: 0.4em 0;
`;

export const ButtonWithIcon = styled.button`
  position: relative;
  margin: 0 5px;
  cursor: pointer;
`;

export const ActionsContainer = styled.div``;

export const BagItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -0px;
  left: 12px;
  width: 18px;
  height: 18px;
  color: #fff;
  font-weight: 600;
  border-radius: 100%;
  background-color: #d23832;
`;
