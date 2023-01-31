import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  difficulty: "easy",
  limit: 10,
  isPlaying: false,
  currentCategories: null,
  soundOn: true,
  currentQuestion: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setLimit: (state, { payload }) => {
      state.limit = payload;
    },
    setDifficulty: (state, { payload }) => {
      state.difficulty = payload;
    },
    setCurrentCategories: (state, { payload }) => {
      state.currentCategories = payload;
      state.isPlaying = true;
    },
    toggleSound: (state) => {
      state.soundOn = !state.soundOn;
    },
    setCurrentQuestion: (state, { payload }) => {
      state.setCurrentQuestion = payload;
    },
  },
});

export default quizSlice.reducer;
export const {
  setLimit,
  setDifficulty,
  setCurrentCategories,
  toggleSound,
  setCurrentQuestion,
} = quizSlice.actions;
