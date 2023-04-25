import styled from '@emotion/styled';
import { HiSearch } from 'react-icons/hi';

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  right: 6px;
  transform: scale(1);
  &:hover {
    transform: scale(1.25);
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border: 1px solid black;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  overflow: hidden;
  border-radius: 8px;
`;

export const FormButton = styled.button`
  display: inline-block;
  height: 20px;
  padding: 0px 5px;
  opacity: 0.4;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const FormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 18px;
  border: none;
  outline: none;
  padding: 4px;
  border-radius: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;