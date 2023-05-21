import {css} from '@emotion/css';

export const container = css`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 25px;

  p {
    display: flex;
    width: 100%;
    justify-content: end;
  }

  span {
    display: flex;
    color: #1f6924;
    width: 100%;
    font-weight: 600;
  }
`;

