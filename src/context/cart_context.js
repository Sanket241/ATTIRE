import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/cartReducer";

const CartContext = createContext();

// to get data from localstorage
const getlocalCartData = () => {
  return localStorage.getItem("Attirecart") ? JSON.parse(localStorage.getItem("Attirecart")) : [];
};

const initialState = {    
  cart: getlocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 500000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  //to add data in local storage
  useEffect(() => {
    // to get total item and total amount
    // dispatch({ type: "GET_TOTALS" });
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
    localStorage.setItem("Attirecart", JSON.stringify(state.cart));
  }, [state.cart]);


  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

    //increament or decrement item

    const setIncrease = (id) => {
      dispatch({ type: "INCREASE_ITEM", payload: id });
    };

    const setDecrease = (id) => {
      dispatch({ type: "DECREASE_ITEM", payload: id });
    }


  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setIncrease, setDecrease }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };