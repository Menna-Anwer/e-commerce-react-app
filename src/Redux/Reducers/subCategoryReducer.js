
const inital = {
    subCategory: [],
    loading: true,
}
const subCategoryReducer = (state = inital, action) => {
    switch(action.type){
        case"Create-Sub-Category":
        return{
            subCategory:action.payload,
            loading:false
        }
        case"Get-Sub-Category":
        return{
            subCategory:action.payload,
            loading:false
        }
        case"Get-Error":
        return{
            loading:true,
            subCategory:action.payload,
        }
        default:
            return state;
    }
}
export default subCategoryReducer