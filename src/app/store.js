import {configureStore,combineReducers} from "@reduxjs/toolkit"
import playlistReducer from "../features/playlist/playlistSlice"
import recentsReducer from "../features/recents/recentSlice"
import notesReducer from "../features/notes/noteSlice"

const combinedReducers = combineReducers({
    playlists:playlistReducer,
    recents:recentsReducer,
    notes:notesReducer
})

const store = configureStore({
    reducer:combinedReducers
})

export default store