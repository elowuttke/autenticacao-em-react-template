import { useState } from "react";
import axios from "axios";
import { navigateToAdmin, navigateToHome } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { Form, FormContainer, Input, LoginButton } from "./styleCreateTripPage";
import useForm from "../hooks/useForm";
import { useProtectedPage } from "../hooks/useProtectedPage.js";

function CreateTripPage() {
  useProtectedPage();
  const navigate = useNavigate();
  const { form, onChange } = useForm({
    nome: "",
    planeta: "",
    data: "",
    descricao: "",
    duracao: "",
  });

  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      auth: token,
    },
  };

  const submitForm = (event) => {
    event.preventDefault();
    const body = {
      name: form.nome,
      planet: form.planeta,
      date: form.data,
      description: form.descricao,
      durationInDays: form.duracao,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/eloisa-conway/trips",
        body,
        headers
      )
      .then((res) => {
        console.log(res.data);
        navigateToHome(navigate);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <FormContainer>
      <h1>Criar Viagem</h1>
      <Form onSubmit={submitForm}>
        <label htmlFor="nome">Nome</label>
        <Input
          id="nome"
          name="nome"
          value={form.nome}
          onChange={onChange}
          placeholder="Nome da Viagem"
          required
        />
        <label htmlFor="planeta">Planeta</label>
        <Input
          id="planeta"
          name="planeta"
          value={form.planeta}
          onChange={onChange}
          placeholder="Planeta"
          required
        />
        <label htmlFor="data">Data</label>
        <Input
          id="data"
          name="data"
          value={form.data}
          onChange={onChange}
          type="date"
          placeholder="data"
          required
        />
        <label htmlFor="descricao">Descricao</label>
        <Input
          id="descricao"
          name="descricao"
          value={form.descricao}
          onChange={onChange}
          placeholder="Descrição da viagem: ao menos 30 caracteres"
          pattern="/^([A-Za-z]\s?){30,}$\g"
          required
        />
        <label htmlFor="duracao">Duração</label>
        <Input
          id="duracao"
          name="duracao"
          value={form.duracao}
          onChange={onChange}
          type="number"
          placeholder="Duração da viagem em dias"
          required
        />
        <LoginButton type="submit">Criar Viagem </LoginButton>
      </Form>
    </FormContainer>
  );
}

export default CreateTripPage;
