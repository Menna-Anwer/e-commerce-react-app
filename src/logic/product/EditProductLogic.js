import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOnesubCategoryAction } from '../../Redux/Actions/subCategoryAction';
import { getAllCategories } from '../../Redux/Actions/categoryAction';
import { getAllBrands } from '../../Redux/Actions/brandAction';
import { toast } from 'react-toastify';
import { getProductById, updateProductById } from '../../Redux/Actions/productAction';

const EditProductLogic = (id) => {

    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState([]);
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
    const item = useSelector((state) => state.products.oneProduct);
    const dataCategory = useSelector((state) => state.allCategory.allCategories);
    const dataBrand = useSelector((state) => state.allBrand.brand);
    const subCategory = useSelector((state) => state.subCategory.subCategory);
    const product = useSelector(state => state.products.product)
    const updateProduct = useSelector(state => state.products.updateProduct)
    useEffect(() => {
        const run = async () => {
            await dispatch(getAllCategories());
            await dispatch(getAllBrands());
            await dispatch(getProductById(id));
        }
        run()
    }, []);
    useEffect(() => {
        if (item.data) {
            const allImages = [item.data.imageCover, ...item.data.images];
            setImages(allImages)
            setProductName(item.data.title)
            setProductDescription(item.data.description)
            setPriceBefore(item.data.price)
            setQty(item.data.quantity)
            setCategoryID(item.data.category)
            SetBrandID(item.data.brand)
            setColors(item.data.availableColors)
        }
    }, [item]);
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

    const onChangeCategory = async (event) => {
        setCategoryID(event.target.value);
    };
    useEffect(() => {
        if (categoryID != 0) {
            const run = async () => {
                await dispatch(getOnesubCategoryAction(categoryID));
            }
            run()
        }
    }, [categoryID]);

    useEffect(() => {
        if (subCategory != 0) {
            setOptions(subCategory.data)
        }
    }, [subCategory]);

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


    const onSelect = (selected) => {
        setSeletedSubID(selected)
    }
    const onRemove = (selected) => {
        setSeletedSubID(selected)
    }

    function dataURLtoFile(dataurl, filename) {
        const arr = dataurl.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
    }
    const convertURLtoFile = async (url) => {
        const response = await fetch(url);
        const blob = await response.blob();
        const ext = url.split(".").pop();
        const metadata = { type: blob.type || `image/${ext}` };
        return new File([blob], `image_${Math.random()}.${ext}`, metadata);
    }
    const handelSubmit = async (event) => {
        let imageCover;
        let itemImages = []
        event.preventDefault();
        console.log("event", event);

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

        if (images[0].length <= 1000) {
            convertURLtoFile(images[0]).then(x => imageCover = x)
        } else {
            imageCover = dataURLtoFile(images[0], Math.random() + ".png")
        }

        Array.from(Array(Object.keys(images).length).keys()).map(
            (index) => {
                if (images[index].length <= 1000) {
                    convertURLtoFile(images[index]).then(x => itemImages.push(x))
                } else {
                    itemImages.push(dataURLtoFile(images[index], Math.random() + ".png"))
                }

            }
        )
        setTimeout(() => {
            formData.append("imageCover", imageCover);
            itemImages.map((item) => formData.append("images", item))
        }, 1000);

        setTimeout(async () => {
            setLoading(true)
            await dispatch(updateProductById(id, formData))
            setLoading(false)
        }, 1000)
    }

    return [loading, images, setImages, productName, productDescription, priceBefore, priceAfter,
        categoryID, qty, seletedSubID, BrandID, options, colors, showColor,
        onChangeProductName, onChangeproductdDescription, onChangePriceBefor, onChangePriceAfter, onChangeQty,
        dataCategory, dataBrand, subCategory, onChangeCategory, onChangeBrand, onChangeColor, handelColor,
        , removeColor, onSelect, onRemove, handelSubmit];
}

export default EditProductLogic
