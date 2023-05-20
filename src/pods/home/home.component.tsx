import React from 'react';
import { FormHome } from './components';
import * as classes from './home.styles';

export const Home:React.FC = () => {

  return (
    <div className={classes.root}>
        <h1>Home Component</h1>
        <FormHome />
    </div>
  )
}
