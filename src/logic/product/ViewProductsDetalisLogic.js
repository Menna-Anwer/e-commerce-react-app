import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductById, getProductLike } from '../../Redux/Actions/productAction';
import { getCategoryById } from '../../Redux/Actions/categoryAction';
import { getBrandById } from '../../Redux/Actions/brandAction';

const ViewProductsDetalisLogic = (id) => {
    let item = []
    let oneCategory = []
    let oneBrand = []
    let images = []
    let productLike = []
    const dataProduct = useSelector((state) => state.products.oneProduct);
    const dataCategory = useSelector((state) => state.allCategory.oneCategory);
    const dataProductLike = useSelector((state) => state.products.productLike)
    const loading = useSelector((state) => state.products.loading);
    const dataBrand = useSelector((state) => state.allBrand.brand);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductById(id));
        console.log("dataBrand", dataBrand);

    }, []);
    

    dataProduct ? item = dataProduct.data : item = [];
    console.log("item",item);
    
  
        images = item.images.map((img) => {
            return { original: img }
        })
    // } else {
    //     images = []
    // }

    useEffect(() => {
        if (item.category)
            dispatch(getCategoryById(item.category));
        if (item.brand)
            dispatch(getBrandById(item.brand));
         if (item.category)
            dispatch(getProductLike(item.category));
    }, [item]);

    dataCategory.data ? oneCategory = dataCategory.data : oneCategory = [];
    dataBrand.data ? oneBrand = dataBrand.data : oneBrand = [];
    dataProductLike ? productLike = dataProductLike.data : productLike = [];
    console.log("productLike", productLike);
    return [item, images, oneCategory, oneBrand,productLike];
}

export default ViewProductsDetalisLogic
