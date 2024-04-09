// import { useLocation } from "react-router-dom";
import LoginForm from "../../modules/AuthForms/LoginForm";
import RegisterForm from "../../modules/AuthForms/RegisterForm";
import { useState } from "react";

const AuthPage = () => {
  // const location = useLocation();

  // const isDashboard = location.pathname === "/dashboard";
  // const isCastomersPage = location.pathname === "/customers";
  // const isProductsPage = location.pathname === "/products";

  const [isRegister, setIsRegister] = useState(false);

  const handleSetForm = () => {
    setIsRegister((show) => !show);
  };

  return (
    <div>
      <p>Hiii</p>
      {isRegister ? <RegisterForm /> : <LoginForm onSetForm={handleSetForm} />}
    </div>
  );
};

export default AuthPage;
