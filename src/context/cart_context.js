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
  shipping_fee: 50000,
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
    localStorage.setItem("Attirecart", JSON.stringify(state.cart));
  }, [state.cart]);




  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };