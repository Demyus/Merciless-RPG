import { createSlice } from "@reduxjs/toolkit";

const initialStats = {
  stunDmg: 0,
  lethalDmg: 0,
  totalLethal: 5,
  totalStun: 5,
};

const conditionSlice = createSlice({
  name: "condition",
  initialState: initialStats,
  reducers: {
    addDmg(state, action) {
      if (action.payload === "Lethal") {
        state.lethalDmg = state.lethalDmg + 1;
      } else {
        state.stunDmg = state.stunDmg + 1;
      }
    },
    removeDmg(state, action) {
      if (action.payload === "Lethal") {
        state.lethalDmg = state.lethalDmg - 1;
      } else {
        state.stunDmg = state.stunDmg - 1;
      }
    },
    setTotal(state, action) {
      if (action.payload.type === "Lethal") {
        state.totalLethal = action.payload.amount;
      } else {
        state.totalStun = action.payload.amount;;
      }      
    },
  },
});

export const conditionActions = conditionSlice.actions;
export default conditionSlice;
