import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../Redux/Actions/categoryAction';

const ViewAdminCatogeryLogic = () => {
    let allCategories = []
    let pagination = []
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategories());
    }, []);
    const dataCategory = useSelector((state) => state.allCategory.allCategories);
    const loading = useSelector((state) => state.allCategory.loading);


    dataCategory.data ? allCategories = dataCategory.data : allCategories = []
      console.log("ViewAdminCatogeryLogic",allCategories);

    dataCategory.paginationResult ? pagination = dataCategory.paginationResult.numberOfPages : pagination = []
    console.log("ViewAdminCatogeryLogic", pagination);


    const onPagination = (page) => {
        dispatch(getAllCategories(4, page));
    };



    return [allCategories, pagination, onPagination];
}

export default ViewAdminCatogeryLogic
