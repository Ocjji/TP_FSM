import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:[{id:1, userName:'김하진', userId:'', userPw:''}]
}

export const authoritySlice = createSlice({
    name:'authority',
    initialState,
    reducers:{

    }
})

export const {} = authoritySlice.actions
export default authoritySlice.reducer