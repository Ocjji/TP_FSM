import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:[],
    currentUser:{id:1, userName:'김하진', userId:'hajeans', userPw:'1234', userEmail:'hajin@naver.com', userPhone:'010-123-123'}

}

export const authoritySlice = createSlice({
    name:'authority',
    initialState,
    reducers:{

    }
})

export const {} = authoritySlice.actions
export default authoritySlice.reducer