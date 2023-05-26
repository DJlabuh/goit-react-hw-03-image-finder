import styled from 'styled-components';

export const GalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const LoadMoreButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 16px;
  margin-right: 10px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #408343;
  }
  &:hover,
  &:focus {
    background-color: #408343;
  }
`;
