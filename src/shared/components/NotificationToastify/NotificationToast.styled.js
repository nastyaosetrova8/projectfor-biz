import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const ToastContainerStyled = styled(ToastContainer)`
  width: 400px;

  .Toastify__toast-container {
    background: #ffffff;
  }

  .Toastify__toast--success {
    background: #ffffff;
    color: #41ddd3;
  }

  .Toastify__toast--error {
    background: #ffffff;
    color: #ff0000;
  }

  .Toastify__toast--info {
    background: #ffffff;
    color: #0000ff;
  }

  .Toastify__toast-body {
    width: 300px;
    height: 80px;
    font-size: 18px;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    max-width: 260px;

    .Toastify__toast-body {
      font-size: 16px;
    }
  }
`;
