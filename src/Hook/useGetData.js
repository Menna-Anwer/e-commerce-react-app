import baseURL from "../Api/baseUrl"


const useGetData= async(url,psrams)=>{
    const res = await baseURL.get(url,psrams)
    return res
}
export default useGetData;