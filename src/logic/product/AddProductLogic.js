import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOnesubCategoryAction } from '../../Redux/Actions/subCategoryAction';
import { getAllCategories } from '../../Redux/Actions/categoryAction';
import { getAllBrands } from '../../Redux/Actions/brandAction';
import { toast } from 'react-toastify';
import { createProduct } from '../../Redux/Actions/productAction';

const AddProductLogic = () => {

    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState({});
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [priceBefore, setPriceBefore] = useState('السعر قبل الخصم');
    const [priceAfter, setPriceAfter] = useState('السعر بعدالخصم');
    const [categoryID, setCategoryID] = useState('');
    const [qty, setQty] = useState('الكميةالمتاحة');
    const [seletedSubID, setSeletedSubID] = useState([]);
    const [BrandID, SetBrandID] = useState('');
    const [options, setOptions] = useState([]);
    const [colors, setColors] = useState([]);
    const [showColor, setShowColor] = useState(false);

    const dispatch = useDispatch();
    
    const product = useSelector(state => state.products.product)
    const dataCategory = useSelector((state) => state.allCategory.allCategories);
    const dataBrand = useSelector((state) => state.allBrand.brand);
    const subCategory = useSelector((state) => state.subCategory.subCategory);


    const onChangeProductName = (event) => {
        event.persist()
        setProductName(event.target.value)
    }
    const onChangeproductdDescription = (event) => {
        event.persist()
        setProductDescription(event.target.value)
    }
    const onChangePriceBefor = (event) => {
        event.persist()
        setPriceBefore(event.target.value)
    }
    const onChangePriceAfter = (event) => {
        event.persist()
        setPriceAfter(event.target.value)
    }
    const onChangeQty = (event) => {
        event.persist()
        setQty(event.target.value)
    }



    useEffect(() => {
        dispatch(getAllCategories());
        dispatch(getAllBrands());
    }, []);
    const onChangeCategory = async (event) => {
        if (event.target.value !== 0) {
            await dispatch(getOnesubCategoryAction(event.target.value));
        }
        setCategoryID(event.target.value);
    };

    const onChangeBrand = (event) => {
        SetBrandID(event.target.value);

    };


    const onChangeColor = () => {
        setShowColor(!showColor);
    };

    const handelColor = (color) => {
        setColors([...colors, color.hex])
        console.log(colors);
        setShowColor(!showColor);
    };

    const removeColor = (color) => {
        const newColors = colors.filter((e) => e !== color)
        setColors(newColors)
    };
    useEffect(() => {
        if (categoryID != 0) {
            if (subCategory.data) {
                console.log("useEffect", subCategory.data);
                setOptions(subCategory.data)
            }
        }
    }, [categoryID]);

    const onSelect = (selected) => {
        setSeletedSubID(selected)
    }
    const onRemove = (selected) => {
        setSeletedSubID(selected)
    }


    function dataURLtoFile(dataurl, filename) {

        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
    }

    const handelSubmit = async (event) => {
        event.preventDefault();
        if (productName === "" || productDescription === "" || categoryID === 0 || priceBefore <= 0 || images.length <= 0) {
            toast.error('من فضلك اكمل البيانات👋!', { position: 'top-left', })
            return;
        }
        const formData = new FormData();
        formData.append("title", productName);
        formData.append("description", productDescription);
        formData.append("brand", BrandID);
        formData.append("quantity", qty);
        formData.append("category", categoryID);
        formData.append("price", priceBefore);
        colors.map((color) => formData.append("availableColors", color))

        seletedSubID.map((item) => formData.append("subcategory", item._id))

        const imgCover = dataURLtoFile(images[0], Math.random() + ".png")

        const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
            (item, index) => {
                return dataURLtoFile(images[index], Math.random() + ".png")
            }
        )
        setTimeout(() => {
            formData.append("imageCover", imgCover);
            itemImages.map((item) => formData.append("images", item))
        }, 1000);

        setTimeout(async () => {
            setLoading(true)
            await dispatch(createProduct(formData))
            setLoading(false)
        }, 1000)
    }



    useEffect(() => {
        if (loading === false) {
            setImages([])
            setProductName('')
            setProductDescription('')
            SetBrandID('0')
            setCategoryID('0')
            setOptions([])
            setSeletedSubID([])
            setColors([])
            setQty('الكمية المتاحة')
            setPriceBefore('السعر قبل الخصم')
            setPriceAfter('السعر بعد الخصم')

            setTimeout(() => setLoading(true), 1500)
            if (product) {
                product.status === 201 ? toast.success('success 👋!', { position: 'top-right', }) :
                    toast.error('error 👋!', { position: 'top-left', });
            }
        }
    }, [loading])

    return [loading, images, setImages, productName, productDescription, priceBefore, priceAfter,
        categoryID, qty, seletedSubID, BrandID, options, colors, showColor,
        onChangeProductName, onChangeproductdDescription, onChangePriceBefor, onChangePriceAfter, onChangeQty,
        dataCategory, dataBrand, subCategory, onChangeCategory, onChangeBrand, onChangeColor, handelColor,
        , removeColor, onSelect, onRemove, handelSubmit];
}

export default AddProductLogic
