import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import reducer from '../reducers/productReducer'

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"))

    const setTokeninLs =(token)=>{
        setToken(token);
        return localStorage.setItem("token",token)
    }
    let isToken = !!token;

    const logouttoken=()=>{
        setToken("")
        localStorage.removeItem("token")
    }




    const initialState = {
        isLoading: false,
        isError: false,
        products: [],
        featureProducts: [],
        isSingleProductLoading: false,
        Singleproduct: {},
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
    // my 2nd api call

    const getSingleProducts = async (URL) => {
        dispatch({ type: "GET_SINGLE_PRODUCT_LOADING" });
        try {
            const response = await axios.get(URL);
            const Singleproduct = await response.data;
            dispatch({ type: "GET_SINGLE_PRODUCT", payload: Singleproduct });
        } catch (error) {
            dispatch({ type: "GET_SINGLE_PRODUCT_API_ERROR" });
        }

    };
    useEffect(() => {
        getProducts(API);

    }, []);

    return (
        <AppContext.Provider value={{ ...state, getSingleProducts, setTokeninLs, isToken, logouttoken }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook
const useGlobalProductContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalProductContext };
