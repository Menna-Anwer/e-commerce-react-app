import useGetData from "../../Hook/useGetData";
import { useInsertData } from "../../Hook/useInsertData";

export const subCategoryAction = (data) => async (dispatch) => {
  try {
    const res = await useInsertData(`/api/v1/subcategories`, data);
    dispatch({
      type: "Create-Sub-Category",
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: "Get-Error",
      payload: e,
    });
  }

};

export const getOnesubCategoryAction = (id) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/categories/${id}/subcategories`);
    dispatch({
      type: "Get-Sub-Category",
      payload: res.data,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: "Get-Error",
      payload: e,
    });
  }

};
