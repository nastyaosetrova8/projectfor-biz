import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {
  AiOutlineCloseS,
  AuthTitle,
  BtnCloseS,
  BtnConfirmAuthS,
  BtnToggleFormAuthS,
  ErrorsStyled,
  FormStyled,
  InputPasswWrapStyled,
  InputS,
  InputsWrapper,
  StyledModal,
} from "../AllModalFormsStyled";
import { saveId, toggleShowModal } from "../../../redux/Slices/modalSlice";
import { selectProducts, selectSavedId } from "../../../redux/selectors";
import {
  notifyEditSuccess,
  notifyError,
} from "../../../shared/components/NotificationToastify/Toasts";
import { editProductThunk } from "../../../redux/Thunks/ProductsThunk";
import { MenuItem, Select } from "@mui/material";

const EditProductForm = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const productId = useSelector(selectSavedId);
  const currentProduct = products.find((item) => productId === item._id);
  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];

  const formik = useFormik({
    initialValues: {
      name: currentProduct.name,
      stock: currentProduct.stock,
      price: currentProduct.price,
      category: currentProduct.category,
      suppliers: currentProduct.suppliers,
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
      const dataEdited = {
        productData: {
          ...values,
          stock: String(values.stock),
          price: String(values.price),
        },
        _id: currentProduct._id,
      };
      dispatch(editProductThunk(dataEdited))
        .unwrap()
        .then(({ dataEdited }) => {
          notifyEditSuccess(dataEdited);
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
    dispatch(saveId(null));
  };

  return (
    <>
      <StyledModal>
        <BtnCloseS onClick={handleClickBtnClose}>
          <AiOutlineCloseS />
        </BtnCloseS>
        <AuthTitle>Edit product</AuthTitle>
        <FormStyled onSubmit={formik.handleSubmit}>
          <InputsWrapper>
            <InputS
              name="name"
              type="text"
              value={formik.values.name}
              autoComplete="off"
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
                autoComplete="off"
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
                autoComplete="off"
                onChange={formik.handleChange}
                label="Price"
              />
            </InputPasswWrapStyled>

            {formik.touched.price && formik.errors.price ? (
              <ErrorsStyled>{formik.errors.price}</ErrorsStyled>
            ) : null}

            {/* ------------------- */}

            <InputPasswWrapStyled>
              <Select
                labelId="Category"
                id="demo-simple-select-helper"
                value={formik.values.category}
                name="category"
                // label="Category"
                onChange={formik.handleChange}
                displayEmpty
                renderValue={(value) => {
                  if (value.length === 0) {
                    return <em>Categories</em>;
                  }

                  return value;
                }}
                // MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}

                // options={options}
              >
                {uniqueCategories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </InputPasswWrapStyled>

            {formik.touched.category && formik.errors.category ? (
              <ErrorsStyled>{formik.errors.category}</ErrorsStyled>
            ) : null}

            <InputPasswWrapStyled>
              <InputS
                name="suppliers"
                type="text"
                value={formik.values.suppliers}
                autoComplete="off"
                onChange={formik.handleChange}
                label="Suppliers"
              />
            </InputPasswWrapStyled>

            {formik.touched.suppliers && formik.errors.suppliers ? (
              <ErrorsStyled>{formik.errors.suppliers}</ErrorsStyled>
            ) : null}
          </InputsWrapper>
          <BtnConfirmAuthS type="submit">Save</BtnConfirmAuthS>
        </FormStyled>

        <BtnToggleFormAuthS type="button" onClick={handleClickBtnClose}>
          Cancel
        </BtnToggleFormAuthS>
      </StyledModal>
    </>
  );
};

export default EditProductForm;
