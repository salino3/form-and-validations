import React from 'react';
import { ButtonForm, InputComponent } from "@/common";
import * as classes from './form.styles';

export const FormHome: React.FC = () => {
  return (
    <div className={classes.root}>
      <classes.Form>
        <InputComponent
          pl="Text your Name"
          name="name"
          txtLabel="Name "
          type="text"
          className={classes.input}
        />
        <InputComponent
          pl="Text your Email"
          name="email"
          txtLabel="Email "
          type="email"
          className={classes.input}
        />
        <InputComponent
          pl="Text your Password"
          name="password"
          txtLabel="Password "
          type="password"
          className={classes.input}
        />
        <ButtonForm txt="Send" />
      </classes.Form>
    </div>
  );
}
