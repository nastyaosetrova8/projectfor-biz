import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const ToastContainerStyled = styled(ToastContainer)`
  width: 400px;

  .Toastify__toast-container {
    background: var(--light-green-color);
  }

  .Toastify__toast--success {
    background: var(--light-green-color);
  }

  .Toastify__toast--error {
    background: var(--light-green-color);
  }

  .Toastify__toast--info {
    background: var(--light-green-color);
  }

  .Toastify__toast-body {
    width: 400px;
    height: 80px;
    font-size: 22px;
    text-align: center;
    color: var(--main-text-color);
  }

  @media screen and (max-width: 768px) {
    max-width: 280px;

    .Toastify__toast-body {
      font-size: 16px;
    }
  }
`;
