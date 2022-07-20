import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstName: yup.string().required("FirstName is Mandotary"),
  lastName: yup.string().required("LastName is Mandotary"),
  email: yup
    .string()
    .email("Please Enter Valid Email")
    .required("Enter Correct Email"),
  age: yup.number().integer().positive().required(),
  password: yup
    .string()
    .required()
    .min(4, "Minimum 4 Characters")
    .max(15, "Maximum 15 Characters"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

const Formingtwo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  console.log(errors);
  console.log(isValid);
  return (
    <Container>
      <Content>
        <header>SIGN IN FORM</header>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <input {...register("firstName")} type="text" placeholder="fName" />
          <p>{errors.firstName?.message}</p>
          <input {...register("lastName")} type="text" placeholder="fName" />
          <p>{errors.lastName?.message}</p>
          <input {...register("email")} type="email" placeholder="email" />
          <p>{errors.email?.message}</p>
          <input {...register("age")} type="text" placeholder="Age" />
          <p>{errors.age?.message}</p>
          <input
            {...register("password")}
            type="password"
            placeholder="password"
          />
          <p>{errors.password?.message}</p>
          <input
            {...register("confirmPassword")}
            type="password"
            placeholder="confirmPassword"
          />
          <p>{errors.confirmPassword?.message}</p>
          <button type="submit" disabled={!isValid}>
            SUBMIT
          </button>
        </form>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1128px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 400px;
  height: 700px;
  background-color: cyan;
  margin: auto;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    width: 80%;
    padding: 20px;
    display: flex;
    flex-direction: column;

    input {
      padding: 10px;
      margin: 10px;
    }

    button {
      width: 200px;
      padding: 10px;
      margin: auto;
    }
  }
`;

export default Formingtwo;
