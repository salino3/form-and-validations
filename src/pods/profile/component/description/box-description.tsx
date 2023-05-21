import React from 'react';
import * as classes from './description.styles';

interface Props {
  text: string;
  user: React.ReactNode
};

export const BoxDescription: React.FC<Props> = (props) => {
    const {text, user} = props;
    
  return (
    <h2 className={classes.container}>
      <p>{text}</p> <span>{user}</span>
    </h2>
  );
};
