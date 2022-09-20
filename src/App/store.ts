
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { authApi } from '../App/API/authAPI';
import authSlice from '../App/API/auth-slice';
import { projectApi } from './API/projects';
import { userConsiderationApi } from './API/userConsiderations';



export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [projectApi.reducerPath]: projectApi.reducer,
        [userConsiderationApi.reducerPath]: userConsiderationApi.reducer,

        auth: authSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, projectApi.middleware, userConsiderationApi.middleware),
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>