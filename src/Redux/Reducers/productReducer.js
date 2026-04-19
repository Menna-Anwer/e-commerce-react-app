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
        product: action.payload,
        loading: false,
      };
    case "Get-All-Products":
      return {
        ...state,
        allProducts: action.payload,
        loading: false,
      };
    case "Get-Product":
      return {
        ...state,
        oneProduct: action.payload,
        loading: false,
      };
    case "Get-Product-Like":
      return {
             ...state,
        productLike: action.payload,
        loading: false,
      };
    case "Update-Product":
      return {
        ...state,
        updateProduct: action.payload,
        loading: false,
      }
    case "Delete-Product":
      return {
        ...state,
        product: action.payload,
        loading: false,
      }
    case "Get-Error":
      return {
        loading: true,
        product: action.payload,
      };
    default:
      return state;
  }
};
export default productReducer;
