import {createSlice} from "@reduxjs/toolkit";
const initialState = {
  items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
  subTotal: localStorage.getItem("subTotal") ? JSON.parse(localStorage.getItem("subTotal")) : 0,
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action){
      const {productId, quantity, subTotal} = action.payload;
      const indexProductId = (state.items).findIndex(item => item.productId === productId);
      if(indexProductId >= 0){
        state.items[indexProductId].quantity += quantity;
        state.subTotal += subTotal;
      }
      else{
        state.items.push({productId, quantity});
        state.subTotal += subTotal;
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
      localStorage.setItem("subTotal", JSON.stringify(state.subTotal));
    },
    changeQuantity(state, action){
      const {productId, quantity, subTotal} = action.payload;
      const indexProductId = (state.items).findIndex(item => item.productId === productId);
      if(quantity > 0){
        state.items[indexProductId].quantity = quantity;
        state.subTotal += subTotal;
      }
      else{
        state.items = (state.items).filter(item => item.productId !== productId);
        state.subTotal += subTotal;
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
      localStorage.setItem("subTotal", JSON.stringify(state.subTotal));
    },
    reduceSubTotal(state, action){
      const {quantity, subTotal} = action.payload;
      if(quantity > 0){
        state.subTotal -= subTotal;
      }
      else{
        state.subTotal -= subTotal
      }
      localStorage.setItem("subTotal", JSON.stringify(state.subTotal));
    }
  }
});
export const {addToCart, changeQuantity, reduceSubTotal} = cartSlice.actions;
export default cartSlice.reducer;