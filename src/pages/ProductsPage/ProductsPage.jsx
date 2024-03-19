import { useSelector } from "react-redux";
import ProductsList from "../../modules/ProductsList/ProductsList"
import { selectIsAuth } from "../../redux/selectors";
// import { useEffect } from "react";
// import { getProductsThunk } from "../../redux/Thunks/ProductsThunk";


const ProductsPage = () => {
  // const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);


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
     
    </>
  )
  );
}

export default ProductsPage;
