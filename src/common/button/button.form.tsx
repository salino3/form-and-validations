import React from 'react';
import * as classes from './button.styles';

interface Props {
  txt?: string;
  type?: "submit" | "button" | "reset" | undefined;
  className?: string;
}

export const ButtonForm: React.FC<Props> = (props) => {
    const {txt, type = "submit", className} = props;

  return (
    <classes.button className={className} type={type}>
        {txt}
    </classes.button>
  )
}
