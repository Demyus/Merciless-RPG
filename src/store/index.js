import { configureStore } from "@reduxjs/toolkit";
import charStatSlice from './stats-slice';
import perksSlice from "./perks-slice";

const store = configureStore({
    reducer: { 
        charStats: charStatSlice.reducer, 
        perks: perksSlice.reducer 
    }
});

export default store;