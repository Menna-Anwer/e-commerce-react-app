const inital = {
  product: [],
  allProducts: [],
  oneProduct: [],
  updateProduct: [],
  productLike: [],
  loading: true,
};
const productReducer = (state = inital, action) => {
  switch (action.type) {
    case "Create-Product":
      return {
        ...state,
        product: action.payload,
        loading: false,
        error: null,
      };
    case "Get-All-Products":
      return {
        ...state,
        allProducts: action.payload,
        loading: false,
        error: null,
      };
    case "Get-Product":
      return {
        ...state,
        oneProduct: action.payload,
        loading: false,
        error: null,
      };
    case "Get-Product-Like":
      return {
             ...state,
        productLike: action.payload,
        loading: false,
        error: null,
      };
    case "Update-Product":
      return {
        ...state,
        updateProduct: action.payload,
        loading: false,
        error: null,
      }
    case "Delete-Product":
      return {
        ...state,
        product: action.payload,
        loading: false,
        error: null,
      }
    case "Get-Error":
      return {
        ...state,
        loading: false,
        error: action.payload?.message || 'Request failed',
      };
    default:
      return state;
  }
};
export default productReducer;
