import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
  justify-content: center;
`;

export const CardsWrapper = styled.div`
  border: 1px solid ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
  transform: scale(1);
  &:hover {
    transform: scale(1.05);
  }
`;

export const Images = styled.img`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const MovieName = styled.h3`
  padding: 4px;
  margin: 0px;
  color: ${props => props.theme.colors.black};
  text-align: center;
`;