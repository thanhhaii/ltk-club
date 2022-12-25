import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CredentialResponse } from '@react-oauth/google';
import { parseToken } from '../../../helpers/utils/tokenUtils';

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
    googleLogin: (_, action: PayloadAction<CredentialResponse>) => {
	  const googleProfile = parseToken(action.payload.credential);

	  return {
        isLogin: true,
        googleProfile: googleProfile
	  };
    },
  },
});

export const authAction = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
