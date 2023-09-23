import {configureStore,combineReducers} from "@reduxjs/toolkit"
import playlistsReducer from "../features/playlists/playlistSlice"
import favoriteReudcer from "../features/favorites/favoriteSlice"
import recentReducer from "../features/recents/recentSlice"

const combinedReducers = combineReducers({
    playlists:playlistsReducer,
    favorites:favoriteReudcer,
    recents:recentReducer
})

const store = configureStore({
    reducer:combinedReducers
})

export default store