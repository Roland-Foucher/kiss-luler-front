import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../entities/login';
import { RootState } from '../store';
import { authApi } from '../API/authAPI';


export interface AuthState {
  user?: User | null,
  token?: string | null,
  isAuthenticated: boolean,
};

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state, { payload: { user, token } }: PayloadAction<AuthState>
    ) => {
      state.user = user
      state.token = token
      localStorage.setItem('token', String(token))
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem('token');
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.getThisUser.matchFulfilled,
        (state, { payload }) => {
          state.user = payload
        }
      )
  }
})

export const { setCredentials, logout } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user
