import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserAuthResponseProp } from '@/types/auth';

interface AuthState {
  isAuthenticate: boolean;
  info: UserAuthResponseProp | null;
}

const initialState: AuthState = {
  isAuthenticate: false,
  info: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuthenticate: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticate = action.payload;
    },
    setInfo: (state, action: PayloadAction<UserAuthResponseProp>) => {
      state.info = action.payload;
    },
  },
});

export const { setIsAuthenticate, setInfo } = authSlice.actions;
export default authSlice.reducer;
