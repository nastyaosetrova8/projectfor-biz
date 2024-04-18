import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {
  BtnsWrapper,
  ErrorsStyled,
  FormStyled,
  InputsGroupS,
  InputsWrapper,
  ModalTitle,
  SelectStyled,
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
import { selectProducts } from "../../../redux/selectors";
import { MenuItem } from "@mui/material";
import BtnConfirm from "../../../shared/components/Buttons/BtnConfirm/BtnConfirm";
import BtnClose from "../../../shared/components/Buttons/BtnClose/BtnClose";
import InputDefault from "../../../shared/components/InputDefault/InputDefault";

const AddProductForm = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];

  const [page] = useState(0);
  const [pageSize] = useState(5);
  const [sort] = useState({});
  const [search] = useState("");

  // useEffect(() => {
  //   dispatch(getProductsThunk());
  // }, [dispatch]);

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
        ...values,
        stock: String(values.stock),
        price: String(values.price),
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
        <BtnClose type="button" onClick={handleClickBtnClose} />
        <ModalTitle>Add a new product</ModalTitle>
        <FormStyled onSubmit={formik.handleSubmit}>
          <InputsWrapper>
            <InputsGroupS>
              <InputDefault
                name="name"
                type="name"
                value={formik.values.name}
                placeholder="Product info"
                onChange={formik.handleChange}
                label="Product info"
              />
              {formik.touched.name && formik.errors.name ? (
                <ErrorsStyled>{formik.errors.name}</ErrorsStyled>
              ) : null}

              <InputDefault
                name="stock"
                type="number"
                value={formik.values.stock}
                placeholder="Stock"
                onChange={formik.handleChange}
                label="Stock"
              />
              {formik.touched.stock && formik.errors.stock ? (
                <ErrorsStyled>{formik.errors.stock}</ErrorsStyled>
              ) : null}

              <InputDefault
                name="price"
                type="number"
                value={formik.values.price}
                placeholder="Price"
                onChange={formik.handleChange}
                label="Price"
              />
              {formik.touched.price && formik.errors.price ? (
                <ErrorsStyled>{formik.errors.price}</ErrorsStyled>
              ) : null}
            </InputsGroupS>

            <InputsGroupS>
              <SelectStyled
                labelId="Category"
                // id="demo-simple-select-helper"
                value={formik.values.category}
                name="category"
                onChange={formik.handleChange}
                displayEmpty
                renderValue={(value) => {
                  if (value.length === 0) {
                    return <p>Categories</p>;
                  }
                  return value;
                }}
                inputProps={{ "aria-label": "Without label" }}
                sx={{
                  borderRadius: "30px",
                }}
              >
                {uniqueCategories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </SelectStyled>
              {formik.touched.category && formik.errors.category ? (
                <ErrorsStyled>{formik.errors.category}</ErrorsStyled>
              ) : null}

              <InputDefault
                name="suppliers"
                type="text"
                value={formik.values.suppliers}
                placeholder="Suppliers"
                onChange={formik.handleChange}
                label="Suppliers"
              />
              {formik.touched.suppliers && formik.errors.suppliers ? (
                <ErrorsStyled>{formik.errors.suppliers}</ErrorsStyled>
              ) : null}
            </InputsGroupS>
          </InputsWrapper>
          <BtnsWrapper>
            <BtnConfirm type="submit">Add</BtnConfirm>
            <BtnConfirm
              variant="btn-cancel"
              type="button"
              onClick={handleClickBtnClose}
            >
              Cancel
            </BtnConfirm>
          </BtnsWrapper>
        </FormStyled>
      </StyledModal>
    </>
  );
};

export default AddProductForm;
