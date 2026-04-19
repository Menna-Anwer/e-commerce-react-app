import{ useEffect, useState } from 'react'
import avatar from "../../images/avatar.png";
import { useDispatch, useSelector} from "react-redux";
import { toast } from 'react-toastify';
import { createBrand } from '../../Redux/Actions/brandAction';

const AddBrandLogic = () => {
    const [name, setName] = useState("");
    const [img, setImg] = useState(avatar);
    const [imgFile, setImgFile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false)
    // const loading = useSelector(state => state.allBrand.brand)
    const onChangeName = (event) => {
        event.persist()
        setName(event.target.value)
    }

    const res = useSelector(state => state.allBrand.brand)
    
    const dispatch = useDispatch();
  
    const onChangeImage = (event) => {
      if (event.target.files && event.target.files[0]) {
        setImg(URL.createObjectURL(event.target.files[0]));
        setImgFile(event.target.files[0]);
   
      }
    };
  
    const handelSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append("name", name);
      formData.append("image", imgFile);
      // setLoading(true);
      setIsPress(true)
      await dispatch(createBrand(formData));
      setLoading(false)
    };
    useEffect(() => {
      if (loading === false) {
        setName("");
        setImg(avatar);
        setImgFile(null);
       
        res.status === 201 ?   toast.success('success 👋!', { position: 'top-right',}) && setLoading(false): 
          toast.error('error 👋!', {position: 'top-left', });;
      }
    }, [loading]);

    return [name,img,loading,isPress,onChangeName,onChangeImage,handelSubmit]
}

export default AddBrandLogic
