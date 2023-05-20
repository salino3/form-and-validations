import {css} from '@emotion/css';
import styled from "@emotion/styled";

export const root = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border: solid blue;
  border-radius: 15px;
  padding: 20px;
`;

export const input = css`
  input {
    border-radius: 15px;
    padding-left: 4px;
  }
`;



