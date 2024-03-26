import { useEffect } from "react";
import { createPortal } from "react-dom";
import { StyledOverlay } from "./ModalStytled";
import { useDispatch, useSelector } from "react-redux";
import { selectIsShowModal, selectModalName } from "../../../redux/selectors";
import { toggleShowModal } from "../../../redux/Slices/modalSlice";
import EditProductForm from "../../../modules/ModalForms/ProductForms/EditProductForm";
import DeleteForm from "../../../modules/ModalForms/DeleteForm";

const modalRoot = document.querySelector("#modal-root");

const Modal = () => {
  const dispatch = useDispatch();
  const isShowModal = useSelector(selectIsShowModal);
  const modalName = useSelector(selectModalName);

  useEffect(() => {
    document.body.classList.add("no-scroll");

    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        document.body.classList.remove("no-scroll");
        dispatch(toggleShowModal(""));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("no-scroll");
    };
  }, [dispatch]);

  const handleClickOverlay = (e) => {
    if (e.target === e.currentTarget) {
      document.body.classList.remove("no-scroll");
      dispatch(toggleShowModal(""));
    }
  };

  return createPortal(
    <StyledOverlay onClick={handleClickOverlay}>
      {/* {modalName === "addProduct" && isShowModal && <AddProductForm />} */}
      {modalName === "editProduct" && isShowModal && <EditProductForm />}
      {modalName === "delete" && isShowModal && <DeleteForm />}

      {/* {modalName === "addSuppliers" && isShowModal && <AddSuppliersForm />}
      {modalName === "editSuppliers" && isShowModal && <EditSuppliersForm />} */}
    </StyledOverlay>,
    modalRoot
  );
};

export default Modal;
