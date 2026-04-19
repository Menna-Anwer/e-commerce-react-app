import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrands } from "../../Redux/Actions/brandAction";

const HomeBrandLogic = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrands());
  }, []);
  const dataBrand =useSelector(state => state.allBrand.brand)
  const loading = useSelector(state => state.allBrand.loading)

  return [dataBrand,loading]
};

export default HomeBrandLogic;
