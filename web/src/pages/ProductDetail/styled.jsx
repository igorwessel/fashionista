import styled from 'styled-components';
import { size } from 'styles/media';

export const Product = styled.div`
  display: flex;
  /* justify-content: center; */
  font-family: 'Roboto', sans-serif;
  margin: 80px 40px;

  @media (max-width: ${size.mobileL}) {
    flex-direction: column;
    margin: 80px 20px;
  }
`;

export const ProductName = styled.h3``;

export const PhotoContainer = styled.figure`
  display: flex;
  justify-content: center;
  color: #aaa;
  font-weight: 600;
  align-items: center;
  min-width: 470px;
  min-height: 598px;
  background-color: white;
`;

export const Photo = styled.img`
  width: 100%;
  min-width: 280px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 15px;
`;

export const Price = styled.div`
  margin: 5px 0;
`;

export const PriceValue = styled.span`
  font-weight: 600;
`;

export const PriceInstallments = styled(PriceValue)`
  margin: 0 10px;
  font-size: 0.92em;
  color: rgba(0, 0, 0, 0.4);
`;

export const Size = styled.div`
  color: rgba(0, 0, 0, 0.4);
  font-size: 0.9em;
  margin: 10px 0;
`;

export const SizeList = styled.ul`
  display: flex;
  list-style: none;
`;

export const SizeItem = styled.li`
  margin: 0 5px 0 0;
`;

export const Button = styled.button`
  background-color: black;
  color: #fff;
  width: 250px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  margin: 10px 0;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;

export const ButtonWithoutBorder = styled(Button)`
  width: 100%;
  background-color: transparent;
  color: black;
  box-shadow: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 7px 9px;
  font-weight: 600;
`;
