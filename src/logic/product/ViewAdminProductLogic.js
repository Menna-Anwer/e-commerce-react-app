import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Actions/productAction";


const ViewAdminProductLogic = () => {
    let allProducts = []
    let pagination = []
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);
    const dataProducts = useSelector((state) => state.products.allProducts);
    const loading = useSelector((state) => state.products.loading);


    dataProducts.data ? allProducts = dataProducts.data : allProducts = []

    dataProducts.paginationResult ? pagination = dataProducts.paginationResult.numberOfPages : pagination = []
    console.log("ViewAdminProductLogic", pagination);


    const onPagination = (page) => {
        dispatch(getAllProducts(4, page));
    };


    
    return [allProducts, pagination, onPagination];
}

export default ViewAdminProductLogic
