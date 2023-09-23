import {createSlice} from "@reduxjs/toolkit"

const recentSlice = createSlice({
    name:"recent",
    initialState:{
        items:[],
    },
    reducers:{
        addToRecent:((state,{payload})=>{
            state.items.unshift(payload.id)
            state.items = state.items.splice(0,5)
        }),
        
    }
})

export const {addToRecent} = recentSlice.actions
export default recentSlice.reducer