import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type RootServiceProps = Record<string, any>;

const initialValue: RootServiceProps = {};

export const rootSlice = createSlice({
  name: 'root',
  initialState: initialValue,
  reducers: {
    login: (state: RootServiceProps, action: PayloadAction<RootServiceProps>) => {
	  return {
        ...state,
        ...action.payload,
	  };
    },
  },
});

const rootReducer = rootSlice.reducer;

export default rootReducer;
