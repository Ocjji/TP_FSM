import { createSlice } from "@reduxjs/toolkit";
import noticeData from '../../assets/api/notice.json'
const initialState = {
    data :noticeData,
    noticeData:[],
    currentCategory : 'all',
    my_squadData:[],
    free_boardData:[],
}
export const noticeSlice = createSlice({
    name:'notice',
    initialState,
    reducers:{
        sortDate(state, action){
            state.noticeData = state.data.sort((a,b)=>b.id-a.id)
        },
        changeCategory(state, action){
            state.currentCategory = action.payload
            if(action.payload ==='all'){
                state.noticeData = state.data
            }else{
                state.noticeData = state.data.filter(item=>item.category===action.payload)
                if(action.payload ==='my_squad'){
                    state.my_squadData = state.noticeData
                }else{
                    state.free_boardData = state.noticeData
                    // console.log(state.free_boardData)
                }
            }
        },
        onSearch(state, action){
            if(state.currentCategory==='all'){
                state.noticeData = state.data.filter(item=>item.title.includes(action.payload)||item.content.includes(action.payload)||item.userName.includes(action.payload))
            }
            else if(state.currentCategory==='my_squad'){
                console.log(state.free_boardData)
                state.noticeData = state.my_squadData.filter(item=>item.title.includes(action.payload)||item.content.includes(action.payload)||item.userName.includes(action.payload))
            }
            else if(state.currentCategory==='free_board'){
                state.noticeData = state.free_boardData.filter(item=>item.title.includes(action.payload)||item.content.includes(action.payload)||item.userName.includes(action.payload))
            }
        }
    }
})

export const {sortDate,changeCategory,onSearch} = noticeSlice.actions
export default noticeSlice.reducer