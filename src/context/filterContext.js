import { createContext, useContext, useReducer, useEffect } from "react";
import { useGlobalProductContext } from "./productContext";
import reducer from "../reducers/filterReducers";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filters: {
        text: "",
        category: "all",
        company: "all",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
        color: "all",
    },
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

    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({ type: "GET_SORTING_VALUE", payload: userValue });
    }
    // this is used for sort the filter

    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
    }

    // to clear the filter
    const clearFilters = () => {
        dispatch({ type: "CLEAR_FILTERS" });
    };

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" });
        dispatch({ type: "GET_SORTING_PRODUCTS" });
    }, [products, state.sorting_value, state.filters]);

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products]);

    return (
        <FilterContext.Provider
            value={{ ...state, setGridView, setListView, sorting, updateFilterValue, clearFilters }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};