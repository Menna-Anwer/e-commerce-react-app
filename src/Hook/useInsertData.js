import baseURL from "../Api/baseUrl"


const useInsertData= async(url,psrams)=>{
  
    const res = await baseURL.post(url,psrams)
    return res
}
const useInsertDataWithImg= async(url,psrams)=>{
    const config={
        headers:{"Content-Type":"multipart/form-data"}
    }
    const res = await baseURL.post(url,psrams,config)    
    return res
}
export {useInsertData,useInsertDataWithImg};