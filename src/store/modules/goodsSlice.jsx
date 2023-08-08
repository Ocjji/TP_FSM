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
    cart: localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : [],
    orderList: []
};

let cartNo = 1;

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
                state.goodsListView = state.goodsData.filter(item => item.category2 === state.currentCategory);
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
            const confirmDelData = confirm(`장바구니에 담으시겠습니까?`)
            if (confirmDelData) {
                state.cart = [...state.cart, { ...action.payload, id: cartNo++ }];
                state.isGoodsPopup = false;
                alert("담겼습니다.")
            }
            else alert("취소되었습니다.")
            console.log(state.cart);
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        onAddGoCart(state, action) {
            state.cart = [...state.cart, { ...action.payload, id: cartNo++ }];
            state.isGoodsPopup = false;
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        changeAmount(state, action) {
            const index = action.payload.index
            state.cart[index].amount = action.payload.newValue
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        onDelCartSelectedItem(state, action) {
            state.cart = state.cart.filter(item => !(item.id === action.payload.id && item.size === action.payload.size))
            console.log(action.payload.id);
            console.log(action.payload.size);
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        onDelCartAllItem(state, action) {
            state.cart = []
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        changeOrderList(state, action) {
            state.orderList = action.payload
        }
    }
})

export const { onGoodsPopup, offPopup, setGoodsPage, setGoodsListView, listSort, onAddCart, changeAmount, onDelCartSelectedItem, onDelCartAllItem, changeOrderList, onAddGoCart } = goodsSlice.actions;
export default goodsSlice.reducer;