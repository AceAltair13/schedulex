import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    courses: [],
};

const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        setNewCourse: (state, action) => {
            state.courses.push(action.payload);
        },
        removeCourse: (state, action) => {
            state.courses = state.courses.filter(
                (course) => course.id !== action.payload
            );
        },
    },
});

export const { setNewCourse, removeCourse } = courseSlice.actions;
export default courseSlice.reducer;
