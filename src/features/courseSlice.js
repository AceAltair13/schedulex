import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setNewCourse: (state, action) => {
      let course = action.payload;
      course.subjects = [];
      state.courses.push(course);
    },
    removeCourse: (state, action) => {
      state.courses = state.courses.filter(
        (course) => course.id !== action.payload
      );
    },
    appendSubject: (state, action) => {
      console.log(action.payload);
      const course = state.courses.find(
        (course) => course.courseName === action.payload.courseName
      );
      course.subjects.push(action.payload);
    },
  },
});

export const { setNewCourse, removeCourse, appendSubject } =
  courseSlice.actions;
export default courseSlice.reducer;
