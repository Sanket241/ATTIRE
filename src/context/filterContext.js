import { createContext, useContext, useReducer, useEffect } from "react";
import { useGlobalProductContext } from "./productContext";
import reducer from "../reducers/filterReducers";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
};

export const FilterContextProvider = ({ children }) => {
    const { products } = useGlobalProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);

    // to set the grid view
    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" });
    };
    // this is use for click on the product list view
    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" });
    };

    const sorting = ()=>{
         dispatch({type: "GET_SORTING_VALUE"});
    }
        // this is used for sort the filter
    useEffect(() => {
        dispatch({ type: "GET_SORTING_PRODUCTS", payload: products});
    }, [state.sorting_value]);

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products]);

    return (
        <FilterContext.Provider
            value={{ ...state, setGridView, setListView, sorting  }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};