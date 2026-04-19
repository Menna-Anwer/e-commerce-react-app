import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Actions/productAction";

const ViewSearchProductsLogic = () => {
  let allProducts = []
  let pagination = []
  const dataProducts = useSelector((state) => state.products.allProducts);
  const loading = useSelector((state) => state.products.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
    console.log(dataProducts);

  }, []);


  if (dataProducts.data) {
    allProducts = dataProducts.data;

  } else {
    allProducts = []
  }

  dataProducts.data ? allProducts = dataProducts.data : allProducts = []

  dataProducts.paginationResult ? pagination = dataProducts.paginationResult.numberOfPages : pagination = []



  const onPagination = (page) => {
    dispatch(getAllProducts(4, page));
  };

  return [allProducts,pagination,onPagination];
}

export default ViewSearchProductsLogic
