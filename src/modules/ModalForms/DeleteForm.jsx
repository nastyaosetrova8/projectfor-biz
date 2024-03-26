import { useDispatch, useSelector } from "react-redux";
import { selectProducts, selectSavedId } from "../../redux/selectors";
import {
  deleteProductThunk,
  getProductsThunk,
} from "../../redux/Thunks/ProductsThunk";
import {
  notifyDeleteSuccess,
  notifyError,
} from "../../shared/components/NotificationToastify/Toasts";
import { saveId, toggleShowModal } from "../../redux/Slices/modalSlice";
import {
  AiOutlineCloseS,
  AuthTitle,
  BtnCloseS,
  BtnConfirmAuthS,
  BtnToggleFormAuthS,
  StyledModal,
} from "./AllModalFormsStyled";
import { useState } from "react";

const DeleteForm = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const productId = useSelector(selectSavedId);
  const currentProduct = products.find((item) => productId === item._id);
  const idCurrentProduct = currentProduct._id;

  const [page] = useState(0);
  const [pageSize] = useState(5);
  const [sort] = useState({});
  const [search] = useState("");

  const handleClickBtnClose = () => {
    document.body.classList.remove("no-scroll");
    dispatch(toggleShowModal(""));
    dispatch(saveId(null));
  };

  const handleDelete = () => {
    dispatch(deleteProductThunk(idCurrentProduct))
      .unwrap()
      .then(({ currentProduct }) => {
        dispatch(
          getProductsThunk({
            page: page,
            pageSize: pageSize,
            sort: JSON.stringify(sort),
            search,
          })
        );

        notifyDeleteSuccess(currentProduct);
        dispatch(toggleShowModal());
      })
      .catch((error) => {
        notifyError(error);
      });
  };

  return (
    <>
      <StyledModal>
        <BtnCloseS onClick={handleClickBtnClose}>
          <AiOutlineCloseS />
        </BtnCloseS>
        <AuthTitle>
          Are you shure you want to remove the {currentProduct.name} product?
        </AuthTitle>

        <BtnConfirmAuthS type="submit" onClick={handleDelete}>
          Delete
        </BtnConfirmAuthS>

        <BtnToggleFormAuthS type="button" onClick={handleClickBtnClose}>
          Cancel
        </BtnToggleFormAuthS>
      </StyledModal>
    </>
  );
};

export default DeleteForm;
