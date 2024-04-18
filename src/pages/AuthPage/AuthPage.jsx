import { useParams } from "react-router-dom";
import LoginForm from "../../modules/AuthForms/LoginForm";
import RegisterForm from "../../modules/AuthForms/RegisterForm";
import { AuthPageContainer } from "./AuthPageStyled";

const AuthPage = () => {
  const { type } = useParams();
  const formToDisplay =
    type === "registerForm" ? <RegisterForm /> : <LoginForm />;

  return <AuthPageContainer>{formToDisplay}</AuthPageContainer>;
};

export default AuthPage;
