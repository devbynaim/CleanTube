import { createSlice, nanoid } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "notes",
  initialState: {
    notes: {},
  },
  reducers: {
    addNote: (state, { payload: { videId, timeline, note } }) => {
      const myNote = { noteId: nanoid(5), timeline, note };
      if (!state.notes[videId]) {
        state.notes[videId] = [myNote];
        return;
      }
      state.notes[videId].push(myNote);
    },

    updateNote: (state, { payload }) => {},
    deleteNote: (state, { payload: { videId, noteId } }) => {
      state.notes[videId] = state.notes[videId].filter(
        (note) => note.noteId != noteId
      );
    },
  },
});

export const { addNote, deleteNote, updateNote } = noteSlice.actions;
export default noteSlice.reducer;
