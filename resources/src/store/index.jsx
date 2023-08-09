import { configureStore } from '@reduxjs/toolkit'
import playerReducer from "./modules/playerSlice";
import goodsReducer from "./modules/goodsSlice";
import newsReducer from "./modules/newsSlice";
import gameScheduleReducer from "./modules/gameScheduleSlice";
import noticeReducer from "./modules/noticeSlice";
import authorityR from "./modules/authoritySlice";
import playerInfo from './modules/playerInfoSlice';

export const store = configureStore({
    reducer: {
        playerR: playerReducer,
        goodsR: goodsReducer,
        newsR: newsReducer,
        gameScheduleR: gameScheduleReducer,
        noticeR: noticeReducer,
        authorityR,
        playerInfo
    }
})