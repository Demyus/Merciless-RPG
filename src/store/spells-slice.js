import { createSlice } from "@reduxjs/toolkit";

const initialStats = {
    'Magical Arts spellsSlots': 1,
    'Miracles spellsSlots': 1,
    'Corruption spellsSlots': 1,
    'Ki Techs spellsSlots': 1,    
}

const spellsSlice = createSlice({
    name: 'spells',
    initialState: initialStats,
    reducers: {        
        initMax(state, action) {
            const stat = action.payload;
            state[`max${stat}`] = 5;
        },
        setSpell(state, action) {
            const amount = action.payload.amount;
            const skill = action.payload.skill;
            state[skill] = amount;
        },
        addSpell(state, action) {
            const spellName = action.payload.name;
            const spellId = action.payload.id;
            
            if(state[spellName]) {
                console.log('exists!');
                return
            }

            state[spellName] = +spellId;
        },
        removeSpell(state, action) {
            const skill = action.payload;
            if(state[skill] === 1) {
                state[skill] = -2;    
                return
            }
            state[skill] = state[skill] - 1;
           // console.log(stat);
        },
        addSlot(state, action) {
            const school = action.payload;
            state[`${school} spellsSlots`] = state[`${school} spellsSlots`] + 1;
        },
        removeSlot(state, action) {
            const school = action.payload;
            state[`${school} spellsSlots`] = state[`${school} spellsSlots`] - 1;
        }
    }
})

export const spellsActions = spellsSlice.actions;
export default spellsSlice;