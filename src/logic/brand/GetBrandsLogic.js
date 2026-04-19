import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrands } from '../../Redux/Actions/brandAction';

const GetBrandsLogic = () => {
    let pagination = 0;
    const dispatch = useDispatch();
    const dataBrand = useSelector((state) => state.allBrand.brand);
    const loading = useSelector((state) => state.allBrand.loading);
  
    useEffect(() => {
      dispatch(getAllBrands(4));
    }, []);
  
    if (dataBrand.paginationResult) {
      pagination = dataBrand.paginationResult.numberOfPages;
    }
    const onPagination = (page) => {
      dispatch(getAllBrands(4, page));
    };

    return [pagination,dataBrand,loading,onPagination]
}

export default GetBrandsLogic
