import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
  soundOn: true,
  currentQuestion: 1,
  submittedQuestions: [1],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    updateScore: (state) => {
      state.score = state.score + 1;
    },
    toggleSound: (state) => {
      state.soundOn = !state.soundOn;
    },
    resetGame: (state) => {
      return { ...initialState, soundOn: state.soundOn };
    },
    setCurrentQuestion: (state, { payload }) => {
      state.setCurrentQuestion = payload;
    },
    changeQuestion: (state, { payload }) => {
      state.currentQuestion = payload;
    },
    addToSubmittedQuestions: (state, { payload }) => {
      state.submittedQuestions = [...state.submittedQuestions, payload + 1];
    },
  },
});

export default gameSlice.reducer;
export const {
  updateScore,
  toggleSound,
  resetGame,
  setCurrentQuestion,
  changeQuestion,
  addToSubmittedQuestions,
} = gameSlice.actions;
