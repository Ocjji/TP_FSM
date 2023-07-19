import {createSlice} from '@reduxjs/toolkit'
import gamescheduledata from '../../assets/api/gameScheduleData.json'
const initialState={
    gamescheduledata : gamescheduledata,
    selectedYearData : gamescheduledata,
}

export const gameScheduleSlice = createSlice({
    name:'gameSchedule',
    initialState,
    reducers:{
        filterSchedule(state,action){
            state.selectedYearData = action.payload==='all'
            ? state.gamescheduledata
            :state.gamescheduledata.filter(item=>item.date.split('.')[0]=== action.payload)
        }

    }
})

export const {filterSchedule} = gameScheduleSlice.actions
export default gameScheduleSlice.reducer