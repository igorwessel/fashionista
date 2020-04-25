import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px 25px;
  color: #aaa;
  font-weight: 600;
`;

export const Catalog = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

export const Product = styled.li`
  width: 300px;
  margin: 10px 5px;
  margin-left: 0;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;

export const ProductPhoto = styled.figure`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 383px;
  background-color: #fff;
`;

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

export const ProductDiscount = styled.span`
  position: absolute;
  background-color: black;
  color: #fff;
  top: -0px;
  right: -0px;
  padding: 2px;
  font-weight: 400;
`;
