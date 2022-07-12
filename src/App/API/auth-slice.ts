import { createSlice} from '@reduxjs/toolkit';
import { RootState } from '../store';
import { authApi } from '../API/authAPI';
import { User } from '../entities/login';


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
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.userLogin.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token;
          state.user = payload.user;
          localStorage.setItem('token', String(state.token))
        }
      )
  }
})

export const { logout } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user
