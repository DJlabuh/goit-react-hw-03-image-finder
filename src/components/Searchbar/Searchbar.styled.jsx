import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  padding: 30px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

export const SearchFormButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 16px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    background-color: #408343;
  }
`;

export const SearchFormButtonLabel = styled.span`
  font-weight: bold;
`;

export const SearchFormInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 200px;
  @media screen and (min-width: 530px) {
    font-size: 14px;
    width: 340px;
  }
  &:focus {
    border-color: #4caf50;
    outline: none;
  }
  &::placeholder {
    color: #999;
  }
`;
