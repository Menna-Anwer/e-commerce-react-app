

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
                loading: false
            }
        case "Get-Category":
            return {
                oneCategory: action.payload,
                loading: false
            }
        case "Create-Categories":
            return {
                category: action.payload,
                loading: false
            }
        case "Update-Category":
            return {
                ...state,
                updateCategory: action.payload,
                loading: false,
            }
        case "Delete-Category":
            return {
                ...state,
                category: action.payload,
                loading: false,
            }
        case "Get-Error":
            return {
                loading: true,
                category: action.payload,
            }
        default:
            return state;
    }
}
export default categoryReducer