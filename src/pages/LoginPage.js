import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { navigateToHome } from "../routes/coordinator";
import useForm from "../hooks/useForm";
import { Form, FormContainer, Input, LoginButton } from "./styleLoginPage";

function LoginPage() {
  const navigate = useNavigate();
  const { form, onChange } = useForm({ email: "", senha: "" });

  const submitForm = (event) => {
    event.preventDefault();
    console.log(form);
    const body = {
      email: form.email,
      password: form.senha,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/eloisa-conway/login",
        body
      )
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        navigateToHome(navigate);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <FormContainer>
      <h1>Login Page</h1>
      <Form onSubmit={submitForm}>
        <label htmlFor="email">Login</label>
        <Input
          id="email"
          name="email"
          type="text"
          value={form.email}
          onChange={onChange}
          placeholder="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <label htmlFor="senha">Senha</label>
        <Input
          id="senha"
          name="senha"
          type="password"
          value={form.senha}
          onChange={onChange}
          placeholder="senha"
          required
        />
        <LoginButton>Login</LoginButton>
      </Form>
    </FormContainer>
  );
}

export default LoginPage;
