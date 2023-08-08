import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    playerData: localStorage.getItem('playerData')
        ? JSON.parse(localStorage.getItem('playerData'))
        : [],
    loading: true,
    state: null,
    selectedItem: null,
    searchPlayerName: null,
    playerEditMode: false,
    currentSetData: [
        { id: 1, backno: null, positionNo: "form334LW", position: "FW" },
        { id: 2, backno: null, positionNo: "form334ST", position: "FW" },
        { id: 3, backno: null, positionNo: "form334RW", position: "FW" },
        { id: 4, backno: null, positionNo: "form334LCM", position: "MF" },
        { id: 5, backno: null, positionNo: "form334CM", position: "MF" },
        { id: 6, backno: null, positionNo: "form334RCM", position: "MF" },
        { id: 7, backno: null, positionNo: "form334LB", position: "DF" },
        { id: 8, backno: null, positionNo: "form334LCB", position: "DF" },
        { id: 9, backno: null, positionNo: "form334RCB", position: "DF" },
        { id: 10, backno: null, positionNo: "form334RB", position: "DF" },
        { id: 11, backno: null, positionNo: "formGK", position: "GK" },
    ],
    current: {},
    selectPosition: null,
    selectPositionViewData: [],
    selectPositionView: "",
    selectPlayerDetail: {},
    forUsePlayerData: null,
}
export const getPlayerData = createAsyncThunk(
    'player/getPlayerData',
    async () => {
        const res = await axios.get('https://gist.githubusercontent.com/audrhks29/0dadcb9679a74e25b8e7d386bc92d756/raw/0a8ccaba6b773a4d59108177c0642e541c1b875e/playerData.json')
        return res.data
    }
)
export const playerInfoSlice = createSlice({
    name: 'player',
    initialState: initialState,
    reducers: {
        onAdd(state, action) {
            const { fieldPlayers, backno, name, birth, position, height, weight, teamNameKor, teamNation, appearances, goal, assists, playTime, Shot, effectiveShot, img, activePlayer, scoreSave, goalsConceded, cleanSheet, IncludeMySquad } = action.payload
            let newPlayer = []
            console.log(position);
            if (position === "GK") {
                newPlayer = {
                    id: state.playerData.length + 1,
                    fieldPlayers, backno, name, birth, position, height, weight, teamNameKor, teamNation, appearances, scoreSave, goalsConceded, cleanSheet, img, activePlayer, IncludeMySquad
                }
            } else {
                newPlayer = {
                    id: state.playerData.length + 1,
                    fieldPlayers, backno, name, birth, position, height, weight, teamNameKor, teamNation, appearances, goal, assists, playTime, Shot, effectiveShot, img, activePlayer, IncludeMySquad
                }
            }
            state.playerData.push(newPlayer);
            localStorage.setItem('playerData', JSON.stringify(state.playerData))
        },
        onDel(state, action) {
            const confirmDelData = confirm(`${action.payload.name} 선수의 데이터를 삭제하시겠습니까?`)
            if (confirmDelData) {
                state.playerData = state.playerData.filter(item => item.id !== action.payload.id)
                alert("삭제되었습니다.")
                localStorage.setItem('playerData', JSON.stringify(state.playerData))
            }
            else alert("취소되었습니다.")
            state.selectedItem = action.payload
        },
        onEdit(state, action) {
            state.playerEditMode = !state.playerEditMode
            const { id, backno, fieldPlayers, name, birth, position, height, weight, teamNameKor, teamNation, appearances, goal, assists, playTime, Shot, effectiveShot, img, activePlayer, scoreSave, goalsConceded, cleanSheet } = action.payload
            const index = state.playerData.findIndex(item => item.id === id);
            if (position === "GK") {
                state.playerData[index] = { id, backno, fieldPlayers, name, birth, position, height, weight, teamNameKor, teamNation, appearances, scoreSave, goalsConceded, cleanSheet, playTime, img, activePlayer };
            } else {
                state.playerData[index] = { id, backno, fieldPlayers, name, birth, position, height, weight, teamNameKor, teamNation, appearances, goal, assists, playTime, Shot, effectiveShot, img, activePlayer };
            }

            state.selectedItem = action.payload
            localStorage.setItem('playerData', JSON.stringify(state.playerData))
        },
        isSelectPlayer(state, action) {
            state.selectedItem = action.payload
        },
        onSearch(state, action) {
            state.searchPlayerName = action.payload
        },
        onSelectPosition(state, action) {
            state.selectPosition = action.payload.id;
            state.selectPositionView = action.payload.position;
            state.selectPlayerDetail = {};

            state.selectPositionViewData = state.playerData.filter(item => item.position === state.selectPositionView);
            console.log(action.payload);
            console.log(state.selectPosition);
        },
        onAddPosition(state, action) {
            if (!action.payload) {
                state.currentSetData = state.currentSetData.map(item => item.id === state.selectPosition ? {
                    ...item,
                    backno: null
                } : item);
                state.selectPosition = null;
                return
            }
            const changePlayer = state.playerData.find(item => Number(item.backno) === Number(action.payload));
            console.log(changePlayer);
            // 중복 선수 제거
            state.currentSetData = state.currentSetData.map(item => Number(item.backno) === Number(changePlayer.backno) ? {
                ...item,
                backno: null
            } : item);

            state.currentSetData = state.currentSetData.map(item => item.id === state.selectPosition ? {
                ...item,
                backno: changePlayer.backno
            } : item);
            console.log(action.payload);
            state.selectPosition = null;
        },
        onViewPlayerDetail(state, action) {
            console.log(action.payload, typeof (action.payload)); // backno 받기
            const onViewPlayer = state.playerData.find(item => Number(item.backno) === Number(action.payload));
            console.log(onViewPlayer);
            state.selectPlayerDetail = onViewPlayer;
        },
        offPopupPlayerList(state, action) {
            state.selectPosition = null;
        },
        onListSearch(state, action) {
            if(!action.payload){
                state.selectPositionViewData = state.playerData.filter(item => item.position === state.selectPositionView);
            }else {
                state.selectPositionViewData = state.playerData.filter(item => item.position === state.selectPositionView);
            state.selectPositionViewData = state.selectPositionViewData.filter(item => item.name.includes(action.payload));
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPlayerData.pending, (state, action) => {
                state.state = '로딩'
                state.loading = true
            })
            .addCase(getPlayerData.fulfilled, (state, action) => {
                state.state = "성공"
                state.loading = false
                state.playerData = action.payload
            })
            .addCase(getPlayerData.rejected, (state, action) => {
                state.state = "rejected"
                state.loading = true
            })
    }
})

export const { onAdd, onDel, onSearch, onEdit, isSelectPlayer, onSelectPosition, onAddPosition, onViewPlayerDetail, offPopupPlayerList,onListSearch } = playerInfoSlice.actions
export default playerInfoSlice.reducer