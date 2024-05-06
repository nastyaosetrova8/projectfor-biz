import { useDispatch, useSelector } from "react-redux";
import { selectProducts, selectSavedId } from "../../redux/selectors";
import { deleteProductThunk } from "../../redux/Thunks/ProductsThunk";
import {
  notifyDeleteSuccess,
  notifyError,
} from "../../shared/components/NotificationToastify/Toasts";
import { saveId, toggleShowModal } from "../../redux/Slices/modalSlice";
import { BtnsWrapper, ModalTitle, StyledModal } from "./AllModalFormsStyled";
import BtnConfirm from "../../shared/components/Buttons/BtnConfirm/BtnConfirm";
import BtnClose from "../../shared/components/Buttons/BtnClose/BtnClose";

const DeleteForm = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const productId = useSelector(selectSavedId);
  const currentProduct = products.find((item) => productId === item._id);
  // const idCurrentProduct = currentProduct._id;

  // const [page] = useState(0);
  // const [pageSize] = useState(5);
  // const [sort] = useState({});
  // const [search] = useState("");

  function handleClickBtnClose() {
    document.body.classList.remove("no-scroll");
    dispatch(toggleShowModal(""));
    dispatch(saveId(null));
  }

  const handleDelete = () => {
    dispatch(deleteProductThunk(productId))
      .unwrap()
      .then(() => {
        // dispatch(
        //   getProductsThunk({
        //     page: page,
        //     pageSize: pageSize,
        //     sort: JSON.stringify(sort),
        //     search,
        //   })
        // );

        dispatch(toggleShowModal(""));
        notifyDeleteSuccess();
      })
      .catch((error) => {
        notifyError(error);
      });
  };

  return (
    <>
      <StyledModal>
        <BtnClose onClick={handleClickBtnClose} />
        <ModalTitle>
          Are you shure you want to remove the{" "}
          {currentProduct && currentProduct.name} product?
        </ModalTitle>

        <BtnsWrapper>
          <BtnConfirm type="submit" onClick={handleDelete}>
            Delete
          </BtnConfirm>
          <BtnConfirm
            variant="btn-cancel"
            type="button"
            onClick={handleClickBtnClose}
          >
            Cancel
          </BtnConfirm>
        </BtnsWrapper>
      </StyledModal>
    </>
  );
};

export default DeleteForm;
