import { createSlice } from "@reduxjs/toolkit";


const perksSlice = createSlice({
    name: 'perks',
    initialState: {
            slot1: 0, 
            slot2: 0, 
            slot3: 0, 
            slot4: 0, 
            slot5: 0
    },
    reducers: {
        addPerk(state, action) {
           const perk = action.payload;
           state[perk.slot] = perk.id;
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