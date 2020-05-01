import styled from 'styled-components';

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
