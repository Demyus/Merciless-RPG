import { createSlice } from "@reduxjs/toolkit";

//Moved to stats slice
const initialProfs = {}

const profSlice = createSlice({
    name: 'proficiencies',
    initialState: initialProfs,
    reducers: {
        initStat(state, action) {
            const stat = action.payload;
            state[stat] = 0;
        },
        initMax(state, action) {
            const stat = action.payload;
            state[`max${stat}`] = 5;
        },
        addProf(state, action) {
            const stat = action.payload;
            state[stat] = state[stat] + 1;
           // console.log(stat);
        },
        removeProf(state, action) {
            const stat = action.payload;
            state[stat] = state[stat] - 1;
           // console.log(stat);
        }
    }
})

export const profActions = profSlice.actions;
export default profSlice;