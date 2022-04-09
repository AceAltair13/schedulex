import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    timetables: [],
    generating: true,
};

const timetableSlice = createSlice({
    name: "timetable",
    initialState,
    reducers: {
        setNewTimetable: (state, action) => {
            state.timetables.push(action.payload);
        },
        setTimetableGenerating: (state, action) => {
            state.generating = action.payload;
        },
    },
});

export const { setNewTimetable, setTimetableGenerating } =
    timetableSlice.actions;
export default timetableSlice.reducer;
