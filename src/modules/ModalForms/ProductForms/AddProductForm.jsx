import { useFormik } from "formik";
// import { useState } from "react";
import { useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
  AuthTitle,
  BtnCloseS,
  BtnConfirmAuthS,
  // BtnEyeStyled,
  BtnToggleFormAuthS,
  ErrorsStyled,
  FormStyled,
  InputPasswWrapStyled,
  InputS,
  InputsWrapper,
  // LuEyeOffStyled,
  // LuEyeStyled,
  // RestoreStyled,
  StyledModal,
} from "../AllModalFormsStyled";
import {
  notifyAddSuccess,
  notifyError,
} from "../../../shared/components/NotificationToastify/Toasts";
import { toggleShowModal } from "../../../redux/Slices/modalSlice";
import {
  addProductThunk,
  getProductsThunk,
} from "../../../redux/Thunks/ProductsThunk";
import { useState } from "react";

const AddProductForm = () => {
  const dispatch = useDispatch();

  const [page] = useState(0);
  const [pageSize] = useState(5);
  const [sort] = useState({});
  const [search] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      stock: "",
      price: "",
      category: "",
      suppliers: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(3)
        .max(30, "Must be 30 characters or less")
        .required("Required"),
      stock: Yup.number("Enter sum")
        .positive("Invalid number")
        .required("Required"),
      price: Yup.number("Enter sum")
        .positive("Invalid number")
        .required("Required"),
      category: Yup.string()
        .min(3)
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      suppliers: Yup.string()
        .min(3)
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    }),

    onSubmit: (values) => {
      const dataAdded = {
        // productData: {
        ...values,
        stock: String(values.stock),
        price: String(values.price),
        // },
      };
      dispatch(addProductThunk(dataAdded))
        .unwrap()
        .then((dataAdded) => {
          dispatch(
            getProductsThunk({
              page: page,
              pageSize: pageSize,
              sort: JSON.stringify(sort),
              search,
            })
          );

          notifyAddSuccess(dataAdded);
          dispatch(toggleShowModal());
        })
        .catch((error) => {
          notifyError(error);
        });
    },
  });

  const handleClickBtnClose = () => {
    document.body.classList.remove("no-scroll");
    dispatch(toggleShowModal(""));
    // dispatch(saveId("null"));
  };

  return (
    <>
      <StyledModal>
        <BtnCloseS onClick={handleClickBtnClose} />
        <AuthTitle>Add a new product</AuthTitle>
        <FormStyled onSubmit={formik.handleSubmit}>
          <InputsWrapper>
            <InputS
              name="name"
              type="name"
              value={formik.values.name}
              placeholder="Product info"
              // autoComplete="off"
              onChange={formik.handleChange}
              label="Product info"
            />

            {formik.touched.name && formik.errors.name ? (
              <ErrorsStyled>{formik.errors.name}</ErrorsStyled>
            ) : null}

            <InputPasswWrapStyled>
              <InputS
                name="stock"
                type="number"
                value={formik.values.stock}
                placeholder="Stock"
                onChange={formik.handleChange}
                label="Stock"
              />
            </InputPasswWrapStyled>

            {formik.touched.stock && formik.errors.stock ? (
              <ErrorsStyled>{formik.errors.stock}</ErrorsStyled>
            ) : null}

            <InputPasswWrapStyled>
              <InputS
                name="price"
                type="number"
                value={formik.values.price}
                placeholder="Price"
                onChange={formik.handleChange}
                label="Price"
              />
            </InputPasswWrapStyled>

            {formik.touched.price && formik.errors.price ? (
              <ErrorsStyled>{formik.errors.price}</ErrorsStyled>
            ) : null}

            {/* ------------------- */}

            <InputPasswWrapStyled>
              <InputS
                name="category"
                type="text"
                value={formik.values.category}
                placeholder="Category"
                onChange={formik.handleChange}
                label="Category"
              />
            </InputPasswWrapStyled>

            {formik.touched.category && formik.errors.category ? (
              <ErrorsStyled>{formik.errors.category}</ErrorsStyled>
            ) : null}

            <InputPasswWrapStyled>
              <InputS
                name="suppliers"
                type="text"
                value={formik.values.suppliers}
                placeholder="Suppliers"
                onChange={formik.handleChange}
                label="Suppliers"
              />
            </InputPasswWrapStyled>

            {formik.touched.suppliers && formik.errors.suppliers ? (
              <ErrorsStyled>{formik.errors.suppliers}</ErrorsStyled>
            ) : null}
          </InputsWrapper>
          <BtnConfirmAuthS type="submit">Add</BtnConfirmAuthS>
        </FormStyled>

        {/* <Link to="/auth/registerForm"> */}
        <BtnToggleFormAuthS type="button">Cancel</BtnToggleFormAuthS>
        {/* </Link> */}
      </StyledModal>
    </>
  );
};

export default AddProductForm;
