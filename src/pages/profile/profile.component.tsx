import React from 'react';
import { ProfileComponent } from '@/pods';
import * as classes from './profile.styles';

export const Profile: React.FC = () => {
  return (
    <div className={classes.root}>
      <ProfileComponent />
    </div>
  )
}
