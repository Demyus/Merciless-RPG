import { createSlice } from "@reduxjs/toolkit";

const initialStats = {
    Strength: 0,
    Agility: 0,
    Stamina: 0,
    Edge: 0,
    usedEdge: 0,
    Logic: 0,
    Intuition: 0,
    Charisma: 0,
    Power: 0,
    usedPower: 0,
    maxStrength:5,
    maxAgility:5,
    maxStamina:5,
    maxEdge:5,
    maxLogic:5,
    maxIntuition:5,
    maxCharisma:5,
    maxPower:5,
}

const charStatSlice = createSlice({
    name: 'charStats',
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

export const charStatActions = charStatSlice.actions;
export default charStatSlice;