import { configureStore } from "@reduxjs/toolkit";
import charStatSlice from './stats-slice';
import perksSlice from "./perks-slice";
import conditionSlice from "./condition-slice";

const store = configureStore({
    reducer: { 
        charStats: charStatSlice.reducer,
        condition: conditionSlice.reducer,
        perks: perksSlice.reducer 
    }
});

export default store;