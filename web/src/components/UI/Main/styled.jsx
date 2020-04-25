import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px 25px;
  color: #aaa;
  font-weight: 600;
`;

export const Catalog = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Product = styled.div`
  width: 300px;
  margin: 10px 5px;
  margin-left: 0;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;

export const ProductPhoto = styled.figure``;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  max-width: 300px;
`;

export const ProductName = styled.h2`
  margin: 5px 0;
  font-size: 0.93em;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.9);
`;

export const ProductValue = styled.span`
  font-weight: 400;
  color: rgba(0, 0, 0, 0.9);
`;
