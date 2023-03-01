import { useNavigate } from "react-router-dom";
import { navigateToHome, navigateToLogin, navigateToCreate } from "../routes/coordinator";
import { HeaderContainer, GoToPage, Title } from "./styleHeader";

function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Title>Labex</Title>
      <GoToPage onClick={() => navigateToHome(navigate)}>
        Ir para página inicial
      </GoToPage>
      <GoToPage onClick={() => navigateToCreate(navigate)}>
        Criar Viagem
      </GoToPage>
      <GoToPage onClick={() => navigateToLogin(navigate)}>
        Fazer Login
      </GoToPage>
    </HeaderContainer>
  );
}

export default Header;

