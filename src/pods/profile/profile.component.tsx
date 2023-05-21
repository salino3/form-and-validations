import React from "react";
import { Link, useParams } from "react-router-dom";
import { LlamadaApi as Users, UsersProps } from "@/apis";
import * as classes from "./profile.styles";
import { BoxDescription } from "./component";
import { GoBack } from "@/common";

export const ProfileComponent: React.FC = () => {
  const { id } = useParams();

  const [user, setUser] = React.useState<UsersProps>(
    Users.filter((user: UsersProps) => user.id === Number(id))[0]
  );

  if (!user) {
    return (
      <div className={classes.boxTitle}>
        <h1 className={classes.textError}>We didn't find any user with ID: {id}</h1>
        <GoBack />
      </div>
    );
  };


  return (
    <div className={classes.root}>
      <div className={classes.boxTitle}>
        <h1>
          Welcome <span>{user?.name}!</span>
        </h1>
        <GoBack />
      </div>
      <div className={classes.boxData}>
        <BoxDescription text="ID:" user={user?.id} />
        <BoxDescription text="Name:" user={user?.name} />
        <BoxDescription text="Email" user={user?.email} />
        <BoxDescription text="Age: " user={user?.age} />
      </div>
    </div>
  );
};
