import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Actions/productAction";

const ViewHomeProductsLogic = () => {
  let allProducts =[]
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const dataProducts = useSelector((state) => state.products.product);
  const loading = useSelector((state) => state.products.loading);
  if (dataProducts.data) {
    allProducts=dataProducts.data.slice(0, 4);

    
  }else{
    allProducts =[]
  }

  return [allProducts];
};

export default ViewHomeProductsLogic;
