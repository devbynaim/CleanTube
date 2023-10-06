import { createSlice } from "@reduxjs/toolkit";
import { getStateFromLocal } from "../../utils/localstroge";

const recentSlice = createSlice({
  name: "recent",
  initialState: {
    items: [],
  },
  reducers: {
    addToRecent: (state, { payload }) => {
      state.items.unshift(payload.id);
      state.items = state.items.splice(0, 5);
    },
    cacheGetRecent: (state) => {
      const localState = JSON.parse(getStateFromLocal("recent"));
      if (localState) {
        state.items = localState;
      }
    },
  },
});

export const { addToRecent, cacheGetRecent } = recentSlice.actions;
export default recentSlice.reducer;
