import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {toast} from 'react-toastify'
import {
    addUserToLocalStorage,
    getUserFromLocalStorage,
    removeUserFromLocalStorage,
  } from "../../utils/localStorage";

const initialState = {
    user: getUserFromLocalStorage(),
}

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (user, thunkAPI) => {
      try {
        const resp = await customFetch.post("/auth/login", user);
        return resp.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
      }
    }
  );

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      toggleSidebar: (state) => {
        state.isSidebarOpen = !state.isSidebarOpen;
      },
      logoutUser: (state, { payload }) => {
        state.user = null;        
        removeUserFromLocalStorage();
        if (payload) {
          toast.success(payload);
        }
      },
    },
    extraReducers: (builder)=>{ 
        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(loginUser.fulfilled,(state, { payload }) => {
            const { user } = payload;
            state.user = user;
            addUserToLocalStorage(user);
      
            state.isLoading = false;
            toast.success(`Welcome back ${user.name}`);
          }).addCase(loginUser.rejected, (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
          })
    },
  });

export default userSlice.reducer;

// export const { } = userSlice.actions;