
const productReducer = (state, action) => {
    switch(action.type){

      case "GET_PRODUCTS_LOADING":
      return {
        ...state,
        isLoading: true,
      }
      case "GET_PRODUCTS_API_ERROR":
        return {
          ...state,
          isError:true,
        }
        case "GET_PRODUCTS":
          const featureData = action.payload.filter((curElem)=>{
            return curElem.featured === true;
          })
          return {
            ...state,
            isLoading: false,
            products: action.payload,
            featureProducts:featureData,
          }

      default:
         return state;

    }
}

export default productReducer
