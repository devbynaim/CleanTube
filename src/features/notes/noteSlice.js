import { createSlice, nanoid } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "notes",
  initialState: {
    notes: {},
  },
  reducers: {
    addNote: (state, { payload: { videoId, timeline, note } }) => {
      const myNote = { noteId: nanoid(5), timeline, note };
      if (!state.notes[videoId]) {
        state.notes[videoId] = [myNote];
        return;
      }
      state.notes[videoId].push(myNote);
    },

    updateNote: (state, { payload: { videoId, noteId, note } }) => {
      const videoNotes = state.notes[videoId];
      if (videoNotes) {
        const noteIndex = videoNotes.findIndex(
          (noteObj) => noteObj.noteId === noteId
        );
        if (noteIndex !== -1) {
          state.notes[videoId][noteIndex].note = note;
        }
      }
    },
    deleteNote: (state, { payload: { videoId, noteId } }) => {
      state.notes[videoId] = state.notes[videoId].filter(
        (note) => note.noteId != noteId
      );
    },
  },
});

export const { addNote, deleteNote, updateNote } = noteSlice.actions;
export default noteSlice.reducer;
