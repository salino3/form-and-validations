import React from 'react';
import * as classes from './page-not-found.styles';
import { GoBack } from '@/common';


export const PageNotFound: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <GoBack />
        <div className={classes.pnf} >
          <h1>* Page Not Found *</h1> 
          <h1>* Page Not Found *</h1>
          <h1>* Page Not Found *</h1>
        </div>
      </div>
    </div>
  );
}

