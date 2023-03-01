import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { navigateToLogin } from "../routes/coordinator";

export const useProtectedPage = () => {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      alert("Para acessar esta página é necessário fazer o login.");
      navigateToLogin(navigate);
    }
  }, [token, navigate]);
};
