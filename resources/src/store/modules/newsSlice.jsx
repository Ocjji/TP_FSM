import {createSlice} from '@reduxjs/toolkit'
import data from '../../assets/api/newsData.json'

const initialState = {
    newsData: data,
    currentData:[],
    currentPerPosts : 12,
    newsDetailData:[]
}

export const newsSlice = createSlice({
    name:'news',
    initialState,
    reducers:{
        newsDataSort(state,action){
            // state.newsData = state.newsData.sort((a,b)=>b.id -a.id) 
            state.currentData = state.newsData.sort((a,b)=>b.id -a.id) 
        },
        searchFilter(state, action){
            state.currentData = state.newsData.filter(item=>item.title.includes(action.payload))
        },
        onAddPosts(state, action){
            state.currentPerPosts = state.currentPerPosts + action.payload
        },
        onPerPosts(state,action){
            state.currentData = state.currentData.slice(0,state.currentPerPosts)
        },
        resetCurrentPerPosts(state,action){
            state.currentPerPosts = 12
        },
        onClickPost(state,action){
            state.detailData = action.payload
        }
    
    }
})

export const {newsDataSort, searchFilter,onAddPosts,onPerPosts, resetCurrentPerPosts,onClickPost} = newsSlice.actions
export default newsSlice.reducer