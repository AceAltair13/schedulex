import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subjects: [],
  facultyModalOpen: false,
  tempFaculty: [],
};

const subjectSlice = createSlice({
  name: "subject",
  initialState,
  reducers: {
    setSubject: (state, action) => {
      state.subjects.push(action.payload);
    },
    setFacultyModalOpen: (state, action) => {
      state.facultyModalOpen = action.payload;
    },
    setTempFaculty: (state, action) => {
      state.tempFaculty = action.payload;
    },
  },
});

export const { setSubject, setFacultyModalOpen, setTempFaculty } =
  subjectSlice.actions;
export default subjectSlice.reducer;
