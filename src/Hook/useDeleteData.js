import baseURL from "../Api/baseUrl";

const useDeleteData = async (url, psrams) => {
    const config = {
        headers: { "Content-Type": "multipart/form-data" }
    }
    const res = await baseURL.delete(url, { ...config, data: psrams })
    return res.data;
}
export default useDeleteData;
