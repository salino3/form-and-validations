import React from 'react';
import * as classes from './input.styles';

interface Props {
    className?: string;
    txtLabel?: string;
    name?: string;
    type?: React.HTMLInputTypeAttribute;
    pl?: string;
};

export const InputComponent: React.FC<Props> = (props) => {
 const {className, name, txtLabel, type, pl} = props;

  return (
    <div className={className}>
      <classes.label htmlFor={name}>{txtLabel}</classes.label> <br />
      <classes.input name={name} type={type} required placeholder={pl} />
    </div>
  );
}
