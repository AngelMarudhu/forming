import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Forming = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);
  return (
    <Container>
      <Content>
        <header>Sign In Form</header>
        <FormingData>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <label>FirstName</label>
            <input
              type="text"
              {...register("fName", {
                required: "FirstName Is Required",
                minLength: { value: 4, message: "Characters Required" },
              })}
            />
            {errors?.fName && (
              <p style={{ color: "red" }}>{errors.fName.message}</p>
            )}
            <br />
            <label>LastName</label>
            <input
              type="text"
              {...register("lName", {
                required: "LastName is Required",
                minLength: { value: 4, message: "character required" },
              })}
            />
            {errors?.lName && (
              <p style={{ color: "red" }}>{errors.lName.message}</p>
            )}
            <br />
            <button>submit</button>
          </form>
        </FormingData>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 1128px;
  margin: auto;
`;

const Content = styled.div`
  width: 400px;
  margin: auto;
  height: 500px;
  margin-top: 3rem;
  color: white;
  background-color: blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  opacity: 0.5;

  header {
    font-size: 25px;
    text-transform: uppercase;
  }
`;

const FormingData = styled.div`
  display: flex;
  flex-direction: column;

  input {
    padding: 10px;
    margin: 10px;
  }

  button {
    width: 200px;
    padding: 10px;
    text-transform: uppercase;
    font-weight: 800;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default Forming;
