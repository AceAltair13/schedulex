import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    unusedDays: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ],
    usedDays: [],
};

const instituteSlice = createSlice({
    name: "institute",
    initialState,
    reducers: {
        setInstituteName: (state, action) => {
            state.name = action.payload;
        },
        setUsedDay: (state, action) => {
            state.usedDays.push(action.payload);
            state.unusedDays = state.unusedDays.filter(
                (day) => day !== action.payload
            );
        },
    },
});

export const { setInstituteName } = instituteSlice.actions;
export default instituteSlice.reducer;
