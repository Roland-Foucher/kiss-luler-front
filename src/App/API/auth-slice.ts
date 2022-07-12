import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { authApi } from '../API/authAPI';


export interface AuthState {
  username?: string | null,
  token?: string | null,
  isAuthenticated: boolean,
};

const initialState: AuthState = {
  username: null,
  token: null,
  isAuthenticated: false,
};

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state, { payload: { username, token } }: PayloadAction<AuthState>
    ) => {
      state.username = username
      state.token = token
      localStorage.setItem('token', String(token))
    },
    logout(state) {
      state.username = null;
      localStorage.removeItem('token');
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.userLogin.matchFulfilled,
        (state, { payload }) => {
          state.username = payload.username;
          state.token = payload.token;
        }
      )
  }
})

export const { setCredentials, logout } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.username
