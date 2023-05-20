import React from 'react';
import { useParams } from 'react-router-dom';
import { LlamadaApi as Users, UsersProps } from "@/apis";
import * as classes from './profile.styles';

export const ProfileComponent: React.FC = () => {

 const {id} = useParams();

 const [user, setUser] = React.useState<UsersProps>(Users.filter((user: UsersProps) => user.id === Number(id))[0]);



 console.log(user);
  return (
    <div className={classes.root}>
      <h1>Your profile</h1>
      <h2>{user?.id}</h2>
      <h3>{user?.name}</h3>
      <h3>{user?.email}</h3>
      <h3>{user?.age}</h3>
    </div>
  );
}
