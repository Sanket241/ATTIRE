import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios"; 
import reducer from '../reducers/productReducer'

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {

    const initialState = {
        isLoading: false,
        isError: false,
        products: [],
        featureProducts:[],
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    const getProducts = async (URL) => {
        dispatch({ type: "GET_PRODUCTS_LOADING" });
      try {
          const response = await axios.get(URL);
          const products = await response.data;
          dispatch({ type: "GET_PRODUCTS", payload: products });
          console.log(products);
      } catch (error) {
        dispatch({ type: "GET_PRODUCTS_API_ERROR" });
      }
    };

    useEffect(() => {
        getProducts(API);
    }, []);

    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook
const useGlobalProductContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalProductContext };
