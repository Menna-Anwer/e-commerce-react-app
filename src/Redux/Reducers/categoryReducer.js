

const inital = {
    allCategories: [],
    oneCategory: [],
    category: [],
    updateCategory: [],
    loading: true,
}
const categoryReducer = (state = inital, action) => {
    switch (action.type) {
        case "Get-All-Categories":
            return {
                ...state,
                allCategories: action.payload,
                loading: false,
                error: null
            }
        case "Get-Category":
            return {
                ...state,
                oneCategory: action.payload,
                loading: false,
                error: null
            }
        case "Create-Categories":
            return {
                ...state,
                category: action.payload,
                loading: false,
                error: null
            }
        case "Update-Category":
            return {
                ...state,
                updateCategory: action.payload,
                loading: false,
        error: null,
            }
        case "Delete-Category":
            return {
                ...state,
                category: action.payload,
                loading: false,
        error: null,
            }
        case "Get-Error":
            return {
                ...state,
                loading: false,
        error: action.payload?.message || 'Request failed',
            }
        default:
            return state;
    }
}
export default categoryReducer
