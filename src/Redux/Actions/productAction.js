import useDeleteData from "../../Hook/useDeleteData";
import useGetData from "../../Hook/useGetData";
import { useInsertDataWithImg } from "../../Hook/useInsertData";
import { useUpdateDataWithImg } from "../../Hook/useUpdateData";

export const createProduct = (formData) => async (dispatch) => {
  try {
    const res = await useInsertDataWithImg(`/api/v1/products`, formData);
    dispatch({
      type: "Create-Product",
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

export const getAllProducts = (limit = 12, page = 1) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/products?limit=${limit}&page=${page}`);
    dispatch({
      type: "Get-All-Products",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "Get-Error",
      payload: e,
    });
  }
};

export const getProductById = (id) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/products/${id}`);
    console.log("getProductById",res);
    
    dispatch({
      type: "Get-Product",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "Get-Error",
      payload: e,
    });
  }
};

export const getProductLike = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?category=${id}`);
    dispatch({
      type: "Get-Product-Like",
      payload: response,
      loading: true
    })

  } catch (e) {
    dispatch({
      type: "Get-Error",
      payload: e,
    });
  }
}

export const updateProductById = (id,formData) => async (dispatch) => {
  try {
    const response = await useUpdateDataWithImg(`/api/v1/products/${id}`, formData);

    dispatch({
      type: "Update-Product",
      payload: response,
      loading: true
    })

  } catch (e) {
    dispatch({
      type: "Get-Error",
      payload: e,
    });
  }
}

export const deleteProducts = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/products/${id}`);

    dispatch({
      type: "Delete-Product",
      payload: response,
      loading: true
    })

  } catch (e) {
    dispatch({
      type: "Get-Error",
      payload: e,
    });
  }
}
