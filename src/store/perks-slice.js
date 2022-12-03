import { createSlice } from "@reduxjs/toolkit";

const perksSlice = createSlice({
    name: 'perks',
    initialState: {
        perks: []
    },
    reducers: {
        addPerk(state, action) {
            const newPerk = action.payload;
            // check if the perk exists...
            const existingPerk = state.perks.find(perks => perks.id === newPerk.id);
            //if not exists, add it
            if(!existingPerk) {
                state.perks.push({perkId: newPerk.id, perkName: newPerk.name, perkDesc: newPerk.desc});
            } else {
                console.log('already exists...');
            }
            
        },
        removePerk(state, action) {
            const id = action.payload;
            //remove perk
            state.perks = state.perks.filter(perk => perk.id !== id )
            
        }
    }
})

export const perksActions = perksSlice.actions;
export default perksSlice;