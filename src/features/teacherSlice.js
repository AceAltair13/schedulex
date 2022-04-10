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
        removeTeacher: (state, action) => {
            state.teachers = state.teachers.filter(
                (teacher) => teacher.name !== action.payload
            );
        },
    },
});

export const { setTeacher, removeTeacher } = teacherSlice.actions;
export default teacherSlice.reducer;
