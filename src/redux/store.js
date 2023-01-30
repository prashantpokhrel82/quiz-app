import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./features/quizSlice";
import userSlice from "./features/userSlice";
import { triviaApi } from "./services/triviaApi";

const store = configureStore({
  reducer: {
    [triviaApi.reducerPath]: triviaApi.reducer,
    quiz: quizSlice,
    user:userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(triviaApi.middleware),
});

export default store;