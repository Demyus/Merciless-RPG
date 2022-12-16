import { createSlice } from "@reduxjs/toolkit";

const initialStats = {
    Athletics: -2,

}

const spellsSlice = createSlice({
    name: 'spells',
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
        setSkill(state, action) {
            const amount = action.payload.amount;
            const skill = action.payload.skill;
            state[skill] = amount;
        },
        addSkill(state, action) {
            const skill = action.payload;
            if(state[skill] === -2) {
                state[skill] = 1;    
                return
            }
            state[skill] = state[skill] + 1;
           // console.log(stat);
        },
        removeSkill(state, action) {
            const skill = action.payload;
            if(state[skill] === 1) {
                state[skill] = -2;    
                return
            }
            state[skill] = state[skill] - 1;
           // console.log(stat);
        }
    }
})

export const spellsActions = spellsSlice.actions;
export default spellsSlice;