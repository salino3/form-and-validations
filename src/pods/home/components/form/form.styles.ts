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
  width: 500px;
  border: solid blue;
  border-radius: 15px;
  padding: 30px;
  
  &:hover {
    -webkit-box-shadow: 13px 6px 48px 16px rgba(21, 14, 204, 1);
    -moz-box-shadow: 13px 6px 48px 26px rgba(21, 14, 204, 1);
    box-shadow: 9px 6px 48px 22px rgba(21, 14, 204, 1);
  }
`;

export const input = css`
  input {
    border-radius: 15px;
    padding-left: 4px;

    outline: none;
    border: 1px solid #ccc;
  }
`;


export const inputErr = css`
  input:focus {
    outline: 2px solid red;
    border: 2px solid red;
  }

`;

export const inputGreen = css`
  input:focus {
    outline: 2px solid green;
    border: 2px solid green;
  }

`;

export const dError = css`

   height: 20px;
   color: red;
   font-size: large;
  
`;

export const dErrorHidden = css`
  height: 20px;
  color: red;
  visibility: hidden;
`;
