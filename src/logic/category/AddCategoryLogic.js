import{ useEffect, useState } from 'react'
import avatar from "../../images/avatar.png";
import { useDispatch, useSelector} from "react-redux";
import { createCategory } from "../../Redux/Actions/categoryAction";
import { toast } from 'react-toastify';

const AddCategoryLogic = () => {
    const [name, setName] = useState("");
    const [img, setImg] = useState(avatar);
    const [imgFile, setImgFile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false)

    const onChangeName = (event) => {
        event.persist()
        setName(event.target.value)
    }

    const res = useSelector(state => state.allCategory.category)
    
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
      setLoading(true);
      setIsPress(true)
      await dispatch(createCategory(formData));
      setLoading(false)
    };
    useEffect(() => {
      if (loading === false) {
        setName("");
        setImg(avatar);
        setImgFile(null);
        setTimeout(() => setLoading(true), 1500)
        res.status === 201 ?   toast.success('success 👋!', { position: 'top-right',}): 
          toast.error('error 👋!', {position: 'top-left', });
      }
    }, [loading]);

    return [name,img,loading,isPress,onChangeName,onChangeImage,handelSubmit]
}

export default AddCategoryLogic
