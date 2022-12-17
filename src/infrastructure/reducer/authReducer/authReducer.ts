import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AuthServiceProps = {
  isLogin: boolean
  googleProfile: Record<string, any>
}

const initialValue: AuthServiceProps = {
  isLogin: false,
  googleProfile: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialValue,
  reducers: {
    login: (_, action: PayloadAction<any>) => {
	  return {
        isLogin: true,
        ...action.payload,
	  };
    },
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
