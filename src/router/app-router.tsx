import React from 'react';
import { Routes as Router, Route } from "react-router-dom";
import { HomePage } from '../pages';
import { SwitchRoutes } from '.';



export const AppRouter: React.FC = () => {
  return (
      <Router>
        <Route path={SwitchRoutes.root} element={<HomePage />} />
      </Router>
  );
}
