import { css } from "@emotion/css";


export const boxTitle = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  font-weight: 700;
  font-size: 32px;

  span {
    color: #9d0208;
  }
`;

export const textError = css`

 color: red;
 text-align: center;
 font-size: 42px;
`;

export const root = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 55px;
  align-items: center;
  gap: 200px;
  font-size: larger;
  
`;



export const boxData = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 32px;
  background: rgba(0, 0, 0, 0.25);
  min-width: 500px;
`;



