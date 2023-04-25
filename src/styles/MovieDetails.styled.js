import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const CardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  color: ${props => props.theme.colors.white};
`;

export const GoBackLink = styled(NavLink)`
  color: ${props => props.theme.colors.white};
  border: 1px solid;
  border-radius: 8px;
  padding: 5px;
  &:hover {
    color: ${props => props.theme.colors.dark};
  }
`;

export const Image = styled.img`
  border-radius: 8px;
  margin-top: 10px;
`;

export const InfoWrapper = styled.div`
  margin: 10px 8px;
  display: flex;
  flex-direction: column;
`;

export const ListLink = styled.ul`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
`;

export const ItemLink = styled.li`
  cursor: pointer;
  color: ${props => props.theme.colors.white};
  border: 1px solid;
  border-radius: 8px;
  padding: 5px;
  &:hover {
    color: ${props => props.theme.colors.dark};
  }
`;

export const Link = styled(NavLink)`
  &.active {
    color: ${props => props.theme.colors.accent};
  }
`;