import { createSlice } from "@reduxjs/toolkit";

const initialGear = {
    "Basic Potions":0,
    "STA Potions":  0,
    "Full Potions": 0,
    "Healing Kit":  0,
    "Healing Kit+2":0,
    weapon1: 0,
    weapon2: 0,
    weapon3: 0,
    
}

const gearSlice = createSlice({
    name: 'gear',
    initialState: initialGear,
    reducers: {        
        setGear(state, action) {
            const amount = action.payload.amount;
            const gear = action.payload.gear;
            state[gear] = amount;
        },
        addGear(state, action) {
            const gear = action.payload;
            state[gear] = state[gear] + 1;
           // console.log(stat);
        },
        removeGear(state, action) {
            const gear = action.payload;
            state[gear] = state[gear] - 1;
           // console.log(stat);
        }
    }
})

export const gearActions = gearSlice.actions;
export default gearSlice;