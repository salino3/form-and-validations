import React from 'react';
import { InputComponent } from '../../../../common';
import * as classes from './form.styles';

export const FormHome: React.FC = () => {
  return (
    <div className={classes.root}>
      <classes.Form>
        <InputComponent
          pl="Text your Name"
          name="name"
          txtLabel="Name: "
          type="text"
        />
        <InputComponent
          pl="Text your Email"
          name="email"
          txtLabel="Email: "
          type="email"
        />
        <InputComponent
          pl="Text your Password"
          name="password"
          txtLabel="Password: "
          type="password"
        />
      </classes.Form>
    </div>
  );
}
