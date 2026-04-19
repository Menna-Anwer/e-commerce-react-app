import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../Redux/Actions/categoryAction';
const HomeCategoryLogic = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategories())
    },[])
    const dataCategory = useSelector(state => state.allCategory.allCategories)
    const loading = useSelector(state => state.allCategory.loading)
    const color = [ "#0034FF", "#FFD3E8", "#55CFDF","#F4DBA5", "#FF6262","#FFD3E8"]

    return [dataCategory,loading,color]
}

export default HomeCategoryLogic
