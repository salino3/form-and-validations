import React from 'react';
import { Routes as Router, Route } from "react-router-dom";
import { HomePage, Profile } from '@/pages';
import { PageNotFound } from '@/pods';
import { SwitchRoutes } from '.';



export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Route path={SwitchRoutes.root} element={<HomePage />} />
      <Route path={`${SwitchRoutes.profile}/:id`} element={<Profile />} />
      <Route path={SwitchRoutes.pageNotFound} element={<PageNotFound />} />
    </Router>
  );
}
