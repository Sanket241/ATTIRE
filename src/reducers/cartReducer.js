const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    // check the exsisting data in cart

    let exsistingItem = state.cart.find((item) => item.id === id + color);
    console.log(exsistingItem);

    if (exsistingItem) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          let newAmount = curElem.amount + amount;

          if(newAmount >= curElem.max){
            newAmount = curElem.max
          }
          return {
            ...curElem, amount: newAmount,
          }
        }
        else {
          return curElem
        }

      })
      return {
        ...state,
        cart: updatedProduct,
      };

    }
    else {


      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "REMOVE_ITEM") {
    // jisoko user ne click kuiya h then uska id ko filter krega and usko show nhi klareyga and rest shw hoga
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if(action.type === "INCREASE_ITEM"){
    let updatedCart = state.cart.map((curElem) => {
      if(curElem.id === action.payload){
        let newAmount = curElem.amount + 1;
        if(newAmount > curElem.max){
          newAmount = curElem.max
        }
        return {...curElem, amount: newAmount}
      }
      else{
        return curElem
      }
    })
    return {...state, cart: updatedCart}
  }

  if(action.type === "DECREASE_ITEM"){
    let updatedCart = state.cart.map((curElem) => {
      if(curElem.id === action.payload){
        let newAmount = curElem.amount - 1;
        if(newAmount < 1){
          newAmount = 1
        }
        return {...curElem, amount: newAmount}
      }
      else{
        return curElem
      }
    })
    return {...state, cart: updatedCart}
  }

  if (action.type === "CART_ITEM_PRICE_TOTAL") {
    let { total_item, total_price } = state.cart.reduce(
      (accum, curElem) => {
        let { price, amount } = curElem;

        accum.total_item += amount;
        accum.total_price += price * amount;

        return accum;
      },
      {
        total_item: 0,
        total_price: 0,
      }
    );
    return {
      ...state,
      total_item,
      total_price,
    };
  }


  return state;
};

export default cartReducer;