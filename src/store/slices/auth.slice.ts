import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserAuthResponseProp } from '@/types/auth';

interface AuthState {
  isAuthenticate: boolean;
  info: UserAuthResponseProp;
}

const initialState: AuthState = {
  isAuthenticate: false,
  info: {
    _id: '',
    name: '',
    email: '',
    __v: null,
  },
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
    setInfoInitialState: (state) => {
      state.info = initialState;
    },
  },
});

export const { setIsAuthenticate, setInfoInitialState, setInfo } = authSlice.actions;
export default authSlice.reducer;
