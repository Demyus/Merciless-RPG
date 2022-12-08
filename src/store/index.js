import { configureStore } from "@reduxjs/toolkit";
import charStatSlice from './stats-slice';
import perksSlice from "./perks-slice";
import conditionSlice from "./condition-slice";
import profSlice from "./proficiencies-slice";
import gearSlice from "./gear-slice";
import pcSlice from "./pc-slice";

const store = configureStore({
    reducer: { 
        pcSlice: pcSlice.reducer,
        charStats: charStatSlice.reducer,
        condition: conditionSlice.reducer,
        perks: perksSlice.reducer,
        proficiencies: profSlice.reducer,
        gear: gearSlice.reducer,
        
    }
});

export default store;