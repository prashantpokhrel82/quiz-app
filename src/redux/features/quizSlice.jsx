import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  difficulty: "easy",
  limit: 5,
  currentCategories: null,  
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
  setCurrentQuestion,
  updateScore,
} = quizSlice.actions;
