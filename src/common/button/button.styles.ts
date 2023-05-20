import styled from '@emotion/styled';

export const button = styled.button`
  background: blue;
  color: white;
  font-size: larger;
  padding: 10px;
  border-radius: 12px;
  margin: 10px;
  cursor: pointer;
  border: 0px;
  outline: none;

  &:active {
    padding: 9px;
    border: solid 0.2px yellow;

    -webkit-box-shadow: 2px -4px 18px 2px rgba(218, 235, 33, 1);
    -moz-box-shadow: 2px -4px 18px 2px rgba(218, 235, 33, 1);
    box-shadow: 2px -4px 18px 2px rgba(218, 235, 33, 1);
  }
`;



