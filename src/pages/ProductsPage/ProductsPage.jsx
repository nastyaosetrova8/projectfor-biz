import { useSelector } from "react-redux";
import ProductsList from "../../modules/ProductsList/ProductsList";
import { selectIsAuth, selectIsShowModal } from "../../redux/selectors";
import Modal from "../../shared/components/Modal/Modal";
// import { useEffect } from "react";
// import { getProductsThunk } from "../../redux/Thunks/ProductsThunk";

const ProductsPage = () => {
  // const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const isShowModal = useSelector(selectIsShowModal);

  // useEffect(() => {
  //   if (!isAuth) return;
  //   dispatch(getProductsThunk());
  //   // dispatch(getTransCategoriesThunk(token));
  // }, [
  //   dispatch,
  //   // token,
  //   isAuth,
  // ]);

  return (
    isAuth && (
      <>
        <ProductsList />
        {isShowModal && <Modal />}
      </>
    )
  );
};

export default ProductsPage;
