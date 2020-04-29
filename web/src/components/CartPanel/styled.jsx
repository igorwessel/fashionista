import styled from 'styled-components';

export const CartContainer = styled.aside`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  width: 400px;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  margin: 10px;
  padding: 5px 10px;
  border: 1px solid black;
  cursor: pointer;
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextMargin10 = styled.span`
  margin: 10px 0;
`;

export const Text = styled.span``;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  padding: 15px;
  top: 0;
  background-color: #fff;
`;

export const CartTitle = styled.h4`
  margin: 0 auto;
`;

export const ProductContainer = styled.div`
  height: 100%;
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

export const ProductImage = styled.figure``;

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
  width: 100%;
  max-width: 100px;
`;

export const RemoveText = styled.a`
  color: rgba(255, 0, 0, 0.6);
  margin: 0 8px;
  cursor: pointer;

  &:hover {
    color: rgba(255, 0, 0, 0.9);
  }
`;
