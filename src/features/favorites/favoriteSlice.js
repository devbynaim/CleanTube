import {createSlice} from "@reduxjs/toolkit"

const favoriteSlice = createSlice({
    name:"favorite",
    initialState:{
        items:[],
    },
    reducers:{
        addToFavorite:((state,{payload})=>{
            state.items.push(payload.id)
        }),
        removeFromFavorite:((state,{payload})=>{
            state.items = state.items.filter(item=>item!=payload.id)
        })
        
    }
})

export const {addToFavorite,removeFromFavorite} = favoriteSlice.actions
export default favoriteSlice.reducer