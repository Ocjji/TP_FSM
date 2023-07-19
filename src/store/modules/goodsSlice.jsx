import { createSlice } from "@reduxjs/toolkit";
import { goodsData } from "../../assets/api/goodsData";
// console.log(goodsData);

const initialState = {
    goodsData: goodsData,
    categoryData: [],
    currentPage: 1,
    isGoodsPopup: false,
    popupData: null,
    goodsListView: goodsData,
    sortOption: "recent",
    currentCategory: "all",
    cart: []
};

export const goodsSlice = createSlice({
    name: "goods",
    initialState,
    reducers: {
        onGoodsPopup(state, action) {
            state.isGoodsPopup = true;
            state.popupData = goodsData.find(item => item.id === Number(action.payload));
            // console.log(state.popupData);
        },
        offPopup(state, action) {
            state.isGoodsPopup = false;
        },
        setGoodsPage(state, action) {
            state.currentPage = action.payload;
        },
        setGoodsListView(state, action) {
            state.currentCategory = action.payload;
            if (state.currentCategory === "all") { state.goodsListView = state.goodsData }
            else {
                state.goodsListView = state.goodsData.filter(item => item.category1 === state.currentCategory);
            }
            // state.sortOption = "recent";
            switch (state.sortOption) {
                case "recent":
                    state.goodsListView.sort((a, b) => a.id - b.id);
                    break;
                case "lowPrice":
                    state.goodsListView.sort((a, b) => a.price - b.price);
                    break;
                case "highPrice":
                    state.goodsListView.sort((a, b) => b.price - a.price);
                    break;
            }
            state.currentPage = 1;
        },
        funcName(state, action) { },
        listSort(state, action) {
            state.sortOption = action.payload;
            switch (action.payload) {
                case "recent":
                    state.goodsListView.sort((a, b) => a.id - b.id);
                    break;
                case "lowPrice":
                    state.goodsListView.sort((a, b) => a.price - b.price);
                    break;
                case "highPrice":
                    state.goodsListView.sort((a, b) => b.price - a.price);
                    break;
            }
        },
        onAddCart(state, action) {
            state.cart = [...state.cart, action.payload];
            console.log(state.cart);
        },
    }
})

export const { onGoodsPopup, offPopup, setGoodsPage, setGoodsListView, listSort, onAddCart } = goodsSlice.actions;
export default goodsSlice.reducer;