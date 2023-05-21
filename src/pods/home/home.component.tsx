import React from 'react';
import { LlamadaApi as Users } from "@/apis";
import { FormHome } from './components';
import * as classes from './home.styles';

export const Home:React.FC = () => {

  return (
    <div className={classes.root}>
      <h1 className={classes.titlePage}>Home Component</h1>
      <div className={classes.dataUser}>
        {JSON.stringify(Users)}
      </div>
      <FormHome />
    </div>
  );
}
