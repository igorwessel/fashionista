import styled from 'styled-components';

export const PanelContainer = styled.aside`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
`;

export const SearchContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
`;

export const SearchDetails = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 18px 5px;
`;

export const SearchTitle = styled.h4`
  margin: 0 auto;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
  border-top: 1px solid rgba(0, 0, 0, 0.02);
  border-bottom: 1px solid rgba(0, 0, 0, 0.02);
  padding: 10px 0;
`;

export const SearchInput = styled.input`
  width: 325px;
  padding: 10px;
  border-radius: 5px;
  font-weight: 600;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const ProductContainer = styled.div`
  background-color: #f9f9f9;
  color: #969696;
  padding: 5px 10px;
`;
