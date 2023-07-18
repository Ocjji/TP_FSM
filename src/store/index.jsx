import { configureStore } from '@reduxjs/toolkit'
import playerReducer from "./modules/playerSlice";
import goodsReducer from "./modules/goodsSlice";

export const store = configureStore({
    reducer: {
        playerR: playerReducer,
        goodsR: goodsReducer
    }
})