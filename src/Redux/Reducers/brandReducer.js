const inital = {
    brand: [],
    loading: true,
}
const brandReducer = (state = inital, action) => {
    switch(action.type){
        case"Get-All-Brands":
        return{
            ...state,
            brand:action.payload,
            loading:false
        }
        case"Get-Brand":
        return{
            brand:action.payload,
            loading:false
        }
        case"Create-Brands":
        return{
            brand:action.payload,
            loading:false
        }
        case"Get-Error":
        return{
            loading:true,
            brand:action.payload,
        }
        default:
            return state;
    }
}
export default brandReducer