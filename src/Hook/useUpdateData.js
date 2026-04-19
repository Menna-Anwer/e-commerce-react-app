import baseURL from "../Api/baseUrl"


const useUpdateData= async(url,psrams)=>{
  
    const res = await baseURL.put(url,psrams)
    return res
}
const useUpdateDataWithImg= async(url,psrams)=>{
    const config={
        headers:{"Content-Type":"multipart/form-data"}
    }
    const res = await baseURL.put(url,psrams,config)    
    return res
}
export {useUpdateData,useUpdateDataWithImg};