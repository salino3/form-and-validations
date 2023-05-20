import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cx } from "@emotion/css";
import { LlamadaApi as Users, UsersProps } from "@/apis";
import { ButtonForm, InputComponent } from "@/common";
import { FormData } from "./interface";
import * as classes from './form.styles';

export const FormHome: React.FC = () => {

 const navigate = useNavigate();

  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const [errorForm, setErrorForm] = React.useState<FormData>({
    name: "E",
    email: "E",
    password: "E",
  });

  //
  const validateField = (field: keyof FormData, value: FormData) => {
    if (value[field].length > 35 || value[field].length < 5) {
      return {
        ...errorForm,
        [field]: "Error - Text must be between 5 and 25 characters",
      };
    } else if (/\d/.test(value["name"])) {
      return {
        ...errorForm,
        ["name"]: "Error - Numbers are not allowed",
      };
    } else if (!/^[A-Za-z0-9\s]+$/.test(value["name"])) {
      return {
        ...errorForm,
        ["name"]: "Error - Special characters are not allowed",
      };
    } else if (
      (value.email !==  "E" || "") &&
      (!value["email"].includes("@") ||
        (!value["email"].includes(".com") && !value["email"].includes(".es")))
    ) {
      return {
        ...errorForm,
        ["email"]: "Error - Email need symbol '@' and '.com' or '.es'",
      };
    } else {
      return {
        ...errorForm,
        [field]: "E",
      };
    }
  };

  //
  const handleChange =
    (field: keyof FormData): React.ChangeEventHandler<HTMLInputElement> =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setErrorForm(
        validateField(field, { ...errorForm, [field]: event.target.value })
      );

      setFormData({
        ...formData,
        [field]: event.target.value,
      });
    };

//
 const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (
   event: React.FormEvent<HTMLFormElement>
 ) => {
   event.preventDefault();


   const checkUserEmail = Users.find(
     (user: UsersProps) => user.email === formData.email
   );

   const checkUserName = Users.find(
     (user: UsersProps) => user.name === formData.name
   );

    const checkUserPassword = Users.find(
      (user: UsersProps) => user.password === formData.password
    );
console.log(checkUserEmail);
   //
   if (
     checkUserEmail === checkUserName &&
     checkUserName?.email !== undefined 
     && checkUserPassword?.password !== undefined
   ) {
    navigate(`second_page/${checkUserPassword.id}`);
   } else {
     alert("Sorry some data maybe it's incorrect");
   }
 };

 
console.log(errorForm.email)
  return (
    <div className={classes.root}>
      <classes.Form id="FormHome" onSubmit={handleSubmit}>
        <InputComponent
          pl="Text your Name"
          name="name"
          txtLabel="Name "
          type="text"
          value={formData.name}
          onChange={handleChange("name")}
          className={cx(
            classes.input,
            errorForm.name.length > 2 ? classes.inputErr : classes.inputGreen
          )}
        />
        <div
          className={
            errorForm.name.length > 2 ? classes.dError : classes.dErrorHidden
          }
        >
          <b>{errorForm.name}</b>
        </div>
        <InputComponent
          pl="Text your Email"
          name="email"
          txtLabel="Email "
          type="email"
          value={formData.email}
          onChange={handleChange("email")}
          className={cx(
            classes.input,
            errorForm.email.length > 2 ? classes.inputErr : classes.inputGreen
          )}
        />
        <div
          className={
            errorForm.email.length > 2 ? classes.dError : classes.dErrorHidden
          }
        >
          <b>{errorForm.email}</b>
        </div>
        {/*  */}
        <InputComponent
          pl="Text your Password"
          name="password"
          txtLabel="Password"
          type="password"
          value={formData.password}
          onChange={handleChange("password")}
          className={cx(
            classes.input,
            errorForm.password.length > 2 ? classes.inputErr : classes.inputGreen
          )}
        />
        <div
          className={
            errorForm.password.length > 2
              ? classes.dError
              : classes.dErrorHidden
          }
        >
          <b>{errorForm.password}</b>
        </div>
        <ButtonForm txt="Send" />
      </classes.Form>
    </div>
  );
}
