import { useDispatch, useSelector } from "react-redux";
import ProductsList from "../../modules/ProductsList/ProductsList";
import { selectIsAuth, selectIsShowModal } from "../../redux/selectors";
import Modal from "../../shared/components/Modal/Modal";
import BtnAdd from "../../shared/components/Buttons/BtnAdd/BtnAdd";
import { BtnTitleStyled, ProdactsActionWrapper } from "./ProductPageStyled";
import { toggleShowModal } from "../../redux/Slices/modalSlice";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const isShowModal = useSelector(selectIsShowModal);

  const handleAddProduct = () => {
    dispatch(toggleShowModal("addProduct"));
  };

  return (
    isAuth && (
      <>
        <ProdactsActionWrapper>
          <BtnAdd onClick={handleAddProduct} />
          <BtnTitleStyled>Add a new product</BtnTitleStyled>
        </ProdactsActionWrapper>
        <ProductsList />
        {isShowModal && <Modal />}
      </>
    )
  );
};

export default ProductsPage;
