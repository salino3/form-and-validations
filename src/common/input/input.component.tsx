import React from 'react';
import * as classes from './input.styles';

interface Props {
  className?: string;
  txtLabel?: string;
  name?: string;
  type?: React.HTMLInputTypeAttribute;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  pl?: string;
};

export const InputComponent: React.FC<Props> = (props) => {
 const {className, name, txtLabel, type, onChange, value, pl} = props;

  return (
    <div className={className}>
      <classes.label htmlFor={name}>{txtLabel}</classes.label> <br />
      <classes.input value={value} onChange={onChange} name={name} type={type} required placeholder={pl} />
    </div>
  );
}
