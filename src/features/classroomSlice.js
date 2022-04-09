import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    classrooms: [],
};

const classroomSlice = createSlice({
    name: "classroom",
    initialState,
    reducers: {
        setClassroom: (state, action) => {
            state.classrooms.push(action.payload);
        },
        removeClassroom: (state, action) => {
            state.classrooms = state.classrooms.filter(
                (classroom) => classroom.id !== action.payload
            );
        },
    },
});

export const { setClassroom, removeClassroom } = classroomSlice.actions;
export default classroomSlice.reducer;
