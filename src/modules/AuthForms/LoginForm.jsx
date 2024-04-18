import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { loginUserThunk } from "../../redux/Thunks/userThunk";
import {
  BtnEyeStyled,
  ErrorsStyled,
  FormStyled,
  InputPasswWrapStyled,
  InputsWrapper,
  LuEyeOffStyled,
  LuEyeStyled,
  StyledModal,
} from "./LoginFormStyled";
import InputDefault from "../../shared/components/InputDefault/InputDefault";
import {
  notifyLoginSuccess,
  notifyRegisterError,
} from "../../shared/components/NotificationToastify/Toasts";
import BtnConfirm from "../../shared/components/Buttons/BtnConfirm/BtnConfirm";
import BtnToggleForm from "../../shared/components/Buttons/BtnToggleForm/BtnToggleForm";
import { QuestionS } from "../../shared/components/Buttons/BtnToggleForm/BtnToggleFormStyled";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordShown = () => setPasswordShown((show) => !show);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      password: Yup.string()
        .min(6, "Enter at least 6 characters")
        .max(20, "Must be maximum 20 characters")
        .required("Password is required"),
    }),

    onSubmit: (values) => {
      dispatch(loginUserThunk(values))
        .unwrap()
        .then((data) => {
          notifyLoginSuccess(data);
        })
        .catch((error) => {
          notifyRegisterError(error);
          navigate("/");
        });
    },
  });

  return (
    <>
      <StyledModal>
        {/* <AuthTitle>Login</AuthTitle> */}
        <FormStyled onSubmit={formik.handleSubmit}>
          <InputsWrapper>
            <InputDefault
              name="email"
              type="email"
              value={formik.values.email}
              placeholder="Email address"
              // autoComplete="off"
              onChange={formik.handleChange}
              label="Email"
            />

            {formik.touched.email && formik.errors.email ? (
              <ErrorsStyled>{formik.errors.email}</ErrorsStyled>
            ) : null}

            <InputPasswWrapStyled>
              <InputDefault
                variant="input-password"
                name="password"
                type={passwordShown ? "text" : "password"}
                value={formik.values.password}
                placeholder="Password"
                onChange={formik.handleChange}
                label="Password"
              />
              <BtnEyeStyled
                type="button"
                onClick={togglePasswordShown}
                name="togglePassword"
                aria-label="Toggle password visibility"
              >
                {passwordShown ? (
                  <LuEyeStyled size={18} />
                ) : (
                  <LuEyeOffStyled size={18} />
                )}
              </BtnEyeStyled>
            </InputPasswWrapStyled>

            {formik.touched.password && formik.errors.password ? (
              <ErrorsStyled>{formik.errors.password}</ErrorsStyled>
            ) : null}
          </InputsWrapper>
          <BtnConfirm type="submit">Log in</BtnConfirm>
        </FormStyled>

        <Link to="/auth/registerForm">
          <QuestionS>Don't have an account? </QuestionS>
          <BtnToggleForm type="button">Register</BtnToggleForm>
        </Link>
      </StyledModal>
    </>
  );
};

export default LoginForm;
