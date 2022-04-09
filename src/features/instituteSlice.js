import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    nonWorkingDays: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ],
    workingDays: [],
};

const instituteSlice = createSlice({
    name: "institute",
    initialState,
    reducers: {
        setInstituteName: (state, action) => {
            state.name = action.payload;
        },
        setWorkingDay: (state, action) => {
            state.workingDays.push(action.payload);
            state.nonWorkingDays = state.nonWorkingDays.filter(
                (day) => day !== action.payload.day
            );
        },
    },
});

export const { setInstituteName, setWorkingDay } = instituteSlice.actions;
export default instituteSlice.reducer;
