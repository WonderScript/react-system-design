import {createSlice} from '@reduxjs/toolkit';

type Habit = {
  time: string;
  firstHabit: string;
  secondHabit: string;
};

type timeboxPlanState = {
  list: Habit[];
};

const initialState: timeboxPlanState = {
  list: [],
};
console.log('eqweq');

export const timeboxPlanSlice = createSlice({
  name: 'timeboxPlan',
  initialState,
  reducers: {
    addPlan: (state, action) => {
      state.list = [...state.list, action.payload];
    },
  },
});

export const {addPlan} = timeboxPlanSlice.actions;

export default timeboxPlanSlice.reducer;
