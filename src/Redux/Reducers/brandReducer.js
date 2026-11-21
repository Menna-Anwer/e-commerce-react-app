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
            loading:false,
            error:null
        }
        case"Get-Brand":
        return{
            ...state,
            brand:action.payload,
            loading:false,
            error:null
        }
        case"Create-Brands":
        return{
            ...state,
            brand:action.payload,
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
export default brandReducer
