import styled from '@emotion/styled';

export const CastList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const CastItem = styled.li`
  width: 80px;
`;

export const CastImage = styled.img`
  width: 100%;
  height: 120px;
  border-radius: 5px;
`;

export const CastName = styled.p`
  font-size: ${props => props.theme.fontSizes.xs};
  margin: 0;
  text-align: center;
`;

export const Message = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.primary};
`;