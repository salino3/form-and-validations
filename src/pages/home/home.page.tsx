import React from "react";
import { Home } from "../../pods";
import {root} from './home-page.styles';

export const HomePage: React.FC = () => {
  
  return (
    <div className={root}>
      <Home />
    </div>
  );
};
