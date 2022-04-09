import { configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistCombineReducers from "redux-persist/es/persistCombineReducers";
import instituteSlice from "../features/instituteSlice";
import classroomSlice from "../features/classroomSlice";
import courseSlice from "../features/courseSlice";
import teacherSlice from "../features/teacherSlice";
import subjectSlice from "../features/subjectSlice";
import timetableSlice from "../features/timetableSlice";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const persistedReducer = persistCombineReducers(persistConfig, {
    institute: instituteSlice,
    classroom: classroomSlice,
    course: courseSlice,
    teacher: teacherSlice,
    subject: subjectSlice,
    timetable: timetableSlice,
});

export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});
