import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type Habit = {
  first: string;
  second?: string;
};

type timeboxPlanState = {
  list: {
    [key: string]: Habit;
  };
};

const initialState: timeboxPlanState = {
  list: {
    5: {first: '', second: ''},
    6: {first: '', second: ''},
    7: {first: '', second: ''},
    8: {first: '', second: ''},
    9: {first: '', second: ''},
    10: {first: '', second: ''},
    11: {first: '', second: ''},
    12: {first: '', second: ''},
    13: {first: '', second: ''},
    14: {first: '', second: ''},
    15: {first: '', second: ''},
    16: {first: '', second: ''},
  },
};

export const timeboxPlanSlice = createSlice({
  name: 'timeboxPlan',
  initialState,
  reducers: {
    addPlan: (
      state,
      action: PayloadAction<{time: string; first?: string; second?: string}>,
    ) => {
      const {time, first, second} = action.payload;

      if (state.list[time]) {
        if (first) state.list[time].first = first;
        if (second) state.list[time].second = second;
      } else {
        state.list[time] = {first: first || '', second: second || ''};
      }
    },
  },
});

export const {addPlan} = timeboxPlanSlice.actions;

export default timeboxPlanSlice.reducer;
