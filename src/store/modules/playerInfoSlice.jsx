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
    playerEditMode: false
}
export const getPlayerData = createAsyncThunk(
    'player/getPlayerData',
    async () => {
        const res = await axios.get('https://gist.githubusercontent.com/audrhks29/0dadcb9679a74e25b8e7d386bc92d756/raw/12d5ef1c61805a55a9b1aac113ca40c926acc8e7/playerData.json')
        return res.data
    }
)
export const playerInfoSlice = createSlice({
    name: 'player',
    initialState: initialState,
    reducers: {
        onAdd(state, action) {
            const { fieldPlayers, name, birth, position, height, weight, teamNameKor, teamNation, appearances, goal, assists, playTime, Shot, effectiveShot, img, activePlayer, scoreSave, goalsConceded, cleanSheet, IncludeMySquad } = action.payload
            let newPlayer = []
            console.log(position);
            if (position === "GK") {
                newPlayer = {
                    id: state.playerData.length + 1,
                    fieldPlayers, name, birth, position, height, weight, teamNameKor, teamNation, appearances, scoreSave, goalsConceded, cleanSheet, img, activePlayer, IncludeMySquad
                }
            } else {
                newPlayer = {
                    id: state.playerData.length + 1,
                    fieldPlayers, name, birth, position, height, weight, teamNameKor, teamNation, appearances, goal, assists, playTime, Shot, effectiveShot, img, activePlayer, IncludeMySquad
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
            const { id, fieldPlayers, name, birth, position, height, weight, teamNameKor, teamNation, appearances, goal, assists, playTime, Shot, effectiveShot, img, activePlayer, scoreSave, goalsConceded, cleanSheet } = action.payload
            const index = state.playerData.findIndex(item => item.id === id);
            if (position === "GK") {
                state.playerData[index] = { id, fieldPlayers, name, birth, position, height, weight, teamNameKor, teamNation, appearances, scoreSave, goalsConceded, cleanSheet, playTime, img, activePlayer };
            } else {
                state.playerData[index] = { id, fieldPlayers, name, birth, position, height, weight, teamNameKor, teamNation, appearances, goal, assists, playTime, Shot, effectiveShot, img, activePlayer };
            }

            state.selectedItem = action.payload
            localStorage.setItem('playerData', JSON.stringify(state.playerData))
        },
        isSelectPlayer(state, action) {
            state.selectedItem = action.payload
        },
        onSearch(state, action) {
            state.searchPlayerName = action.payload
        }
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

export const { onAdd, onDel, onSearch, onEdit, isSelectPlayer } = playerInfoSlice.actions
export default playerInfoSlice.reducer