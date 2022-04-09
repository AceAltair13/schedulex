import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    teachers: [],
};

const teacherSlice = createSlice({
    name: "teacher",
    initialState,
    reducers: {
        setTeacher: (state, action) => {
            state.teachers.push(action.payload);
        },
    },
});

export const { setTeacher } = teacherSlice.actions;
export default teacherSlice.reducer;
