import { createSlice } from "@reduxjs/toolkit";

const initialStats = {
    Athletics: -2,
    Swiming: -2,
    Stealth: -2,
    Thievery: -2,
    Acrobatics: -2,
    Religion: -2,
    Etiquette: -2,
    Intimidation: -2,
    Deceive: -2,
    Persuasion: -2,
    Perception: -2,
    Survival: -2,
    Insight: -2,
    Tracking: -2,
    Arcana: -2,
    "First Aid": -2,
    Alchemy: -2,

}

const skillsSlice = createSlice({
    name: 'skills',
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
            const spell = action.payload;            
            
            //remove spell
            state.spells = state.spells.filter(currSpell => currSpell !== spell )

        }
    }
})

export const skillsActions = skillsSlice.actions;
export default skillsSlice;