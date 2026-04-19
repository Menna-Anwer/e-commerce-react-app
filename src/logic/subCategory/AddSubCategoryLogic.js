import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../Redux/Actions/categoryAction";
import {subCategoryAction} from "../../Redux/Actions/subCategoryAction";
import { toast } from "react-toastify";

const AddSubCategoryLogic = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [id, setId] = useState("0");
  const [isPress, setIsPress] = useState(false);
  const [loading, setLoading] = useState(true);
  const dataCategory = useSelector((state) => state.allCategory.allCategories);
  const subCategory = useSelector((state) => state.subCategory.subCategory);
  
  
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const onChangeName = (event) => {
    event.persist();
    setName(event.target.value);
  };
  const handelEvent = (event) => {
    setId(event.target.value);
  };
  const handelSubmit = async (event) => {
    event.preventDefault();
    if (id === "0" || name === "") {
      toast.error("chose category👋!", { position: "top-left" });
    }
    // setLoading(true);
    setIsPress(true);
    await dispatch(subCategoryAction({ name, category: id }));
    setLoading(false);
    
  };
  useEffect(() => {
    if (loading === false) {
      setName("");
      setId("0");
      setTimeout(() => setLoading(true), 1500)
      subCategory.status === 201
        ? toast.success("success 👋!", { position: "top-right" })
        : toast.error("error 👋!", { position: "top-left" });
    }
  }, [loading]);

  return [
    name,
    loading,
    isPress,
    dataCategory,
    onChangeName,
    handelEvent,
    handelSubmit,
  ];
};

export default AddSubCategoryLogic;
