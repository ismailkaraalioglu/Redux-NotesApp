import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      {
        id: 1,
        title: "Test başlık",
        description: "Bu bir test notu",
        color: "Primary",
      },
    ],
    filtered: "",
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    removeNote: (state, action) => {
      const id = action.payload;
      // BU ŞEKİLDEDE YAPILABİLİR.
      // const index = state.items.findIndex(item => item.id === id);
      // state.items.splice(index, 1)
      const filterNote = state.items.filter((item) => item.id !== id);
      state.items = filterNote;
    },
    filterNote: (state, action) => {
      state.filtered = action.payload;
    },
  },
});

export const { addNote, removeNote, filterNote } = notesSlice.actions;

export default notesSlice.reducer;
