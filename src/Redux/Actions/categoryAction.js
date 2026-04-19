
import useDeleteData from '../../Hook/useDeleteData';
import useGetData from '../../Hook/useGetData';
import { useInsertDataWithImg } from '../../Hook/useInsertData';
import { useUpdateDataWithImg } from '../../Hook/useUpdateData';


export const getAllCategories = (limit, page) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/categories?limit=${limit}&page=${page}`)
    dispatch({
      type: "Get-All-Categories",
      payload: res.data
    })
  } catch (e) {
    dispatch({
      type: "Get-Error",
      payload: e
    })
  }
}
export const getCategoryById = (id) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/categories/${id}`)
    dispatch({
      type: "Get-Category",
      payload: res.data
    })
  } catch (e) {
    dispatch({
      type: "Get-Error",
      payload: e
    })
  }
}

export const createCategory = (formData) => async (dispatch) => {
  try {
    const res = await useInsertDataWithImg(`/api/v1/categories`, formData)
    dispatch({
      type: "Create-Categories",
      payload: res,
      loading: true
    })
  } catch (e) {
    dispatch({
      type: "Get-Error",
      payload: e
    })
  }
}
export const updateCategory = (formData,id) => async (dispatch) => {
  try {
    const response = await useUpdateDataWithImg(`/api/v1/categories/${id}`, formData);

    dispatch({
      type: "Update-Category",
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

export const deleteCategory = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/categories/${id}`);

    dispatch({
      type: "Delete-Category",
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