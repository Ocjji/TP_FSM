import { createSlice } from "@reduxjs/toolkit";
import noticeData from '../../assets/api/notice.json'
import noticeSquadData from '../../assets/api/noticeSquad.json'
const initialState = {
    data: noticeData,
    noticeData: [],
    currentCategory: 'all',
    my_squadData: [],
    free_boardData: [],
    editData: [],
    noticeSquadData: noticeSquadData
}
let no = 11
export const noticeSlice = createSlice({
    name: 'notice',
    initialState,
    reducers: {
        sortDate(state, action) {
            state.noticeData = state.data.sort((a, b) => b.id - a.id)
        },
        changeCategory(state, action) {
            state.currentCategory = action.payload
            if (action.payload === 'all') {
                state.noticeData = state.data
            } else {
                state.noticeData = state.data.filter(item => item.category === action.payload)
                if (action.payload === 'my_squad') {
                    state.my_squadData = state.noticeData
                } else {
                    state.free_boardData = state.noticeData
                }
            }
        },
        onSearch(state, action) {
            if (state.currentCategory === 'all') {
                state.noticeData = state.data.filter(item => item.title.includes(action.payload) || item.content.includes(action.payload) || item.userName.includes(action.payload))
            }
            else if (state.currentCategory === 'my_squad') {
                console.log(state.free_boardData)
                state.noticeData = state.my_squadData.filter(item => item.title.includes(action.payload) || item.content.includes(action.payload) || item.userName.includes(action.payload))
            }
            else if (state.currentCategory === 'free_board') {
                state.noticeData = state.free_boardData.filter(item => item.title.includes(action.payload) || item.content.includes(action.payload) || item.userName.includes(action.payload))
            }
        },
        onViewPlus(state, action) {
            state.data = state.data.map(item => item.id === action.payload ? { ...item, view: Number(item.view) + 1 } : item)
        },
        onAdd(state, action) {
            state.data.push({ id: no++, ...action.payload, userName: 'test', view: 0 })
        },
        onDel(state, action) {
            state.data = state.data.filter(item => item.id !== action.payload)
        },
        onEdit(state, action) {
            state.editData = action.payload
        },
        onUpdate(state, action) {
            state.data = state.data.map(item => item.id === action.payload.id ? { ...item, ...action.payload } : item)
        }
    }
})

export const { sortDate, changeCategory, onSearch, onAdd, onViewPlus, onDel, onEdit, onUpdate } = noticeSlice.actions
export default noticeSlice.reducer