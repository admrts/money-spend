import { createSlice } from "@reduxjs/toolkit";
import products from "../products";

const initialState = {
  productsItem: products,
  money: 1000000,
  basket: [],
  totalPrice: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    buyItem: (state, action) => {
      const checkBasket = state.basket.find(
        (item) => item.id === action.payload.id
      );
      if (checkBasket) {
        checkBasket.amount += 1;
        checkBasket.price += action.payload.price;
      } else {
        state.basket.push({
          title: action.payload.title,
          id: action.payload.id,
          amount: 1,
          price: action.payload.price,
        });
      }
    },
    sellItem: (state, action) => {
      const checkBasket = state.basket.find(
        (item) => item.id === action.payload.id
      );
      if (checkBasket) {
        checkBasket.amount -= 1;
        checkBasket.price -= action.payload.price;
        if (checkBasket.amount === 0) {
          state.basket = state.basket.filter((item) => {
            return item.id !== action.payload.id;
          });
        }
      }
    },

    calculateTotal: (state) => {
      let total = 0;
      state.basket.forEach((item) => {
        total += item.price;
      });
      state.totalPrice = total;
    },
    clearBasket: (state) => {
      console.log("clear");
      state.basket = [];
    },
  },
});

export const { buyItem, sellItem, calculateTotal, clearBasket } =
  productSlice.actions;
export default productSlice.reducer;
