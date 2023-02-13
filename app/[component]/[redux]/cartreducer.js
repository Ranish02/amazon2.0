import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [
      {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 3.9,
          count: 120,
        },
        quantity: 1,
      },
      {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description:
          "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image:
          "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: {
          rate: 4.1,
          count: 259,
        },
        quantity: 2,
      },
      {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description:
          "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        rating: {
          rate: 4.7,
          count: 500,
        },
        quantity: 12,
      },
    ],
  },
  reducers: {
    addtoCart: (state, action) => {
      // console.log("addtto cart");
      console.log(action.payload);
      // console.log(...state.items);
      var isAlready = false;
      state.items.map((item) => {
        if (item.id === action.payload.id) {
          isAlready = true;
          console.log("Already xa");
        }
      });
      if (isAlready) {
        const updatedItems = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        state.items = updatedItems;
      } else {
        state.items = [...state.items, action.payload];
      }
    },
    removefromCart: (state, action) => {
      console.log("remove from cart");
      console.log(action.payload);
      const { id } = action.payload;
      // state.items = state.items.filter((item) => item.id !== id);

      state.items = state.items.filter((item) => item.id !== action.payload.id);
      ///////
      // const index = state.items.findIndex((item) => item.id === action.payload);
      // let newCart = [...state.items];
      // if (index >= 0) {
      //   newCart.splice(index, 1);
      // } else {
      //   console.warn("Cant remover product");
      // }
      //////
      // state.items = newCart;
      // co nsole.log(state.items);
      // state.items = [
      //   state.items.filter((item) => {
      //     if (item.id != action.payload) {
      //       console.log("to delete data");
      //       console.log(action.payload);
      //       return item;
      //     } else {
      //       return null;
      //     }
      //   }),
      // ];
    },
    viewCartConsole: (state, action) => {
      console.log("HEllo rnaish");
      console.log(state.items);
    },
  },
});
export const { addtoCart, removefromCart, viewCartConsole } = cartSlice.actions;
export const selectItems = (state) => state.cart.items;

export default cartSlice.reducer;
