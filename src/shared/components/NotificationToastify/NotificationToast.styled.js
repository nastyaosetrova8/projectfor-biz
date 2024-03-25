import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const ToastContainerStyled = styled(ToastContainer)`
  width: 400px;

  .Toastify__toast-container {
    background: green;
  }

  .Toastify__toast--success {
    background: green;
  }

  .Toastify__toast--error {
    background: green;
  }

  .Toastify__toast--info {
    background: green;
  }

  .Toastify__toast-body {
    width: 400px;
    height: 80px;
    font-size: 22px;
    text-align: center;
    color: black;
  }

  @media screen and (max-width: 768px) {
    max-width: 280px;

    .Toastify__toast-body {
      font-size: 16px;
    }
  }
`;
