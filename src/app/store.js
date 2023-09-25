import {configureStore,combineReducers} from "@reduxjs/toolkit"
import playlistsReducer from "../features/playlists/playlistSlice"
import recentsReducer from "../features/recents/recentSlice"
import notesReducer from "../features/notes/noteSlice"

const combinedReducers = combineReducers({
    playlists:playlistsReducer,
    recents:recentsReducer,
    notes:notesReducer
})

const store = configureStore({
    reducer:combinedReducers
})

export default store