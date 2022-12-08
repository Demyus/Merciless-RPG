import { createSlice } from "@reduxjs/toolkit";

const initialStats = {
    name: '',
    age: '',
    height: '',
    race: '',
    religion: '',
    sex: '',
    weight: '',
    exp: 0,
    journal1: '',
    journal2: '',
    journal3: '',
    settings: '',

}

const pcSlice = createSlice({
    name: 'pcSlice',
    initialState: initialStats,
    reducers: {
        initStat(state, action) {
            const stat = action.payload;
            state[stat] = 0;
        },
        initMax(state, action) {
            const stat = action.payload;
            state[`max${stat}`] = 5;
        },
        setPc(state, action) {
            const value = action.payload.value;
            const stat = action.payload.stat;
            state[stat] = value;
        },
        addStat(state, action) {
            const stat = action.payload;
            state[stat] = state[stat] + 1;
           // console.log(stat);
        },
        removeStat(state, action) {
            const stat = action.payload;
            state[stat] = state[stat] - 1;
           // console.log(stat);
        }
    }
})

export const pcActions = pcSlice.actions;
export default pcSlice;