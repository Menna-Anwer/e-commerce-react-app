import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../Redux/Actions/categoryAction";

const GetCategoryLogic = () => {
    let pagination = 0;
    const dispatch = useDispatch();
    const dataCategory = useSelector((state) => state.allCategory.allCategories);
    const loading = useSelector((state) => state.allCategory.loading);
  
    useEffect(() => {
      dispatch(getAllCategories(4));
    }, []);
  
    if (dataCategory.paginationResult) {
      pagination = dataCategory.paginationResult.numberOfPages;
    }
    const onPagination = (page) => {
      dispatch(getAllCategories(4, page));
    };

    return [pagination,dataCategory,loading,onPagination]
}

export default GetCategoryLogic
