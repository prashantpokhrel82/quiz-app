import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  difficulty: 'easy',
  limit: 10,
  playMode: false,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setLimit:(state, {payload})=>{
      state.limit = payload;
    },
    setDifficulty:(state, {payload})=>{
      state.difficulty = payload;
    }
  },
});

export default quizSlice.reducer;
export const { setLimit,setDifficulty } = quizSlice.actions;