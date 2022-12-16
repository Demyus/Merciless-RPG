import { createSlice } from "@reduxjs/toolkit";

const initialGear = {
    "Basic Potions":0,
    "STA Potions":  0,
    "Full Potions": 0,
    "Healing Kit":  0,
    "Healing Kit+2":0,
    weapon1: 'none',
    weapon2: 'none',
    weapon3: 'none',
    custom_1_name: '',
    custom_1_hit: '',
    custom_1_type: '',
    custom_1_reach: '',
    custom_1_damage: '',
    custom_1_properties: '',

    custom_2_name: '',
    custom_2_hit: '',
    custom_2_type: '',
    custom_2_reach: '',
    custom_2_damage: '',
    custom_2_properties: '',
    
    Platinum: 0,
    Gold: 200,
    Silver: 0,
    'Gems & Jewelry': 0,
    Rations: 0,

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