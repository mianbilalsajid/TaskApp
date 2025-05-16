
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadToken = createAsyncThunk("auth/loadToken", async () => {
  const token = await AsyncStorage.getItem("token");
  return token;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    isAuthenticated: false,
    status: "idle",
  },
  reducers: {
    authenticate: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      AsyncStorage.setItem("token", action.payload);
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      AsyncStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadToken.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadToken.fulfilled, (state, action) => {
        state.token = action.payload;
        state.isAuthenticated = !!action.payload;
        state.status = "succeeded";
      })
      .addCase(loadToken.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { authenticate, logout } = authSlice.actions;
export default authSlice.reducer;
