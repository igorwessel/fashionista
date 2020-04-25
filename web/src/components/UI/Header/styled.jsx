import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  align-items: center;
  background-color: #fff;
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
