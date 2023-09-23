import {configureStore,combineReducers} from "@reduxjs/toolkit"
import playlistsReducer from "../features/playlists/playlistSlice"
import favoritesReudcer from "../features/favorites/favoriteSlice"
import recentsReducer from "../features/recents/recentSlice"
import notesReducer from "../features/notes/noteSlice"

const combinedReducers = combineReducers({
    playlists:playlistsReducer,
    favorites:favoritesReudcer,
    recents:recentsReducer,
    notes:notesReducer
})

const store = configureStore({
    reducer:combinedReducers
})

export default store