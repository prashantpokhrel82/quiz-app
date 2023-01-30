import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: 'science',
  difficulty: '',
    limit: 10,

};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    // setQuestions: (state,{payload})=>{
    //     state.questions = payload;
    // }
  },
});

export default quizSlice.reducer;
// export const { setQuestions } = quizSlice.actions;