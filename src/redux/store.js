import { configureStore } from "@reduxjs/toolkit";
import teacherSlice from "./reducers/teacherSlice.js";
import doctorSlice from "./reducers/doctorSlice.js";
import appointmentSlice from "./reducers/appointmentSlice.js";
import userSlice from "./reducers/userSlice.js";

const store = configureStore({
  reducer: {
    teacher: teacherSlice,
    doctor: doctorSlice,
    appointment: appointmentSlice,
    user: userSlice,
  },
});

export default store;
