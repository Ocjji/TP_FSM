// 페이지 미적용 파일입니다.

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentSetData: [
        { id: 1, no: null, positionNo: "positionNo1" },
        { id: 2, no: null, positionNo: "positionNo2" },
        { id: 3, no: null, positionNo: "positionNo3" },
        { id: 4, no: null, positionNo: "positionNo4" },
    ],
    playerData: [
        { pid: 1, p_no: 11, name: "김하진", position: "ST", img: "./images/PlayerImg/hajin.png" },
        { pid: 2, p_no: 26, name: "이명관", position: "MF", img: "./images/PlayerImg/lmk.png" },
        { pid: 3, p_no: 31, name: "김형종", position: "DF", img: "./images/PlayerImg/khj.png" },
        { pid: 4, p_no: 32, name: "이상연", position: "GK", img: "./images/PlayerImg/lsy.png" }
    ],
    current: {},
    selectPosition: null,
};

export const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        // onAdd(state, action) {
        //     const changePlayer = state.playerData.find(item => item.p_no === Number(action.payload));
        //     console.log(changePlayer);

        //     state.currentSetData = state.currentSetData.map(item => item.id === state.selectPosition ? {
        //         ...item,
        //         no: changePlayer.p_no
        //     } : item);
        //     console.log(action.payload);
        //     state.selectPosition = null;
        // },
        // onSelectPosition(state, action) {
        //     state.selectPosition = action.payload;
        //     console.log(action.payload);
        //     console.log(state.selectPosition);
        // },
    }
})

export const { onAdd, onSelectPosition } = playerSlice.actions;
export default playerSlice.reducer;