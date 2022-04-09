import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    subjects: [],
};

const subjectSlice = createSlice({
    name: "subject",
    initialState,
    reducers: {
        setSubject: (state, action) => {
            state.subjects.push(action.payload);
        },
    },
});

export const { setSubject } = subjectSlice.actions;
export default subjectSlice.reducer;
