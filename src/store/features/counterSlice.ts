import {createSlice} from '@reduxjs/toolkit';

type counterState = {
  value: number;
};

const initialState: counterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
  },
});

export const {increment} = counterSlice.actions;

export default counterSlice.reducer;
