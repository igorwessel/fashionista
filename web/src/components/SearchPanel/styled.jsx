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
  min-height: 100vh;
  max-height: 100%;
  background-color: #f9f9f9;
  color: #969696;
  padding: 5px 10px;
`;

export const ProductList = styled.ul`
  list-style: none;
`;

export const ProductItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 0.89em;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  font-size: 0.7em;
  width: 100%;
  max-width: 100px;
  height: 126px;
`;

export const ProductName = styled.span`
  color: black;
  font-weight: 600;
`;

export const ProductPrice = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Price = styled.span`
  font-weight: 600;
  color: black;
  font-size: 1rem;
`;

export const Installments = styled.span`
  margin: 8px 0;
  font-size: 0.94em;
`;

export const Photo = styled.img`
  min-width: 100px;
  max-width: 100px;
`;
