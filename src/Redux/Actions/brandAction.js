import useGetData from '../../Hook/useGetData';
import { useInsertDataWithImg } from '../../Hook/useInsertData';


export const getAllBrands=(limit) => async(dispatch)=>{
    try{
      const res = await useGetData(`/api/v1/brands?limit=${limit}`)
      dispatch({
        type:"Get-All-Brands",
        payload:res.data
      })
    }catch(e){
        dispatch({
            type:"Get-Error",
            payload:e
          })
    }
}

export const getBrandById=(id) => async(dispatch)=>{
  try{
    const res = await useGetData(`/api/v1/brands/${id}`)
    dispatch({
      type:"Get-Brand",
      payload:res.data
    })
  }catch(e){
      dispatch({
          type:"Get-Error",
          payload:e
        })
  }
}

export const createBrand=(formData) => async(dispatch)=>{
  try{
    const res = await useInsertDataWithImg(`/api/v1/brands`,formData)
    dispatch({
      type:"Create-Brands",
      payload:res,
      loading:true
    })    
  }catch(e){
      dispatch({
          type:"Get-Error",
          payload:e
        })
  }
}