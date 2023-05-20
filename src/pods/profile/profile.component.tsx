import React from 'react';
import { useParams } from 'react-router-dom';
import * as classes from './profile.styles';

export const ProfileComponent: React.FC = () => {

 const {id} = useParams();

 console.log(id);
  return (
    <div className={classes.root}>

    <h1>Your profile</h1>
    <h2>{id}</h2>

    </div>
  )
}
