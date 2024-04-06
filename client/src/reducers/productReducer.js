
const productReducer = (state, action) => {
  switch (action.type) {

    case "GET_PRODUCTS_LOADING":
      return {
        ...state,
        isLoading: true,
      }
    case "GET_PRODUCTS_API_ERROR":
      return {
        ...state,
        isError: true,
        isLoading: false,
      }
    case "GET_PRODUCTS":
      const featureData = action.payload.filter((curElem) => {
        return curElem.featured === true;
      })
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      }

    case "GET_SINGLE_PRODUCT_LOADING":
      return {
        ...state,
        isSingleProductLoading: true,
      }
    case "GET_SINGLE_PRODUCT_API_ERROR":
      return {
        ...state,
        isSingleProductLoading: false,
        isError: true,
      }
    case "GET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleProductLoading:false,
        Singleproduct: action.payload,
      }

    default:
      return state;

  }
}

export default productReducer
