
const inital = {
    subCategory: [],
    loading: true,
}
const subCategoryReducer = (state = inital, action) => {
    switch(action.type){
        case"Create-Sub-Category":
        return{
            ...state,
            subCategory:action.payload,
            loading:false,
            error:null
        }
        case"Get-Sub-Category":
        return{
            ...state,
            subCategory:action.payload,
            loading:false,
            error:null
        }
        case"Get-Error":
        return{
            ...state,
            loading:false,
            error:action.payload?.message || 'Request failed',
        }
        default:
            return state;
    }
}
export default subCategoryReducer
