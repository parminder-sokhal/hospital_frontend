import { configureStore } from "@reduxjs/toolkit";
import teacherSlice from "./reducers/teacherSlice.js";
import doctorSlice from "./reducers/doctorSlice.js";
import appointmentSlice from "./reducers/appointmentSlice.js";

const store = configureStore({
  reducer: {
    teacher: teacherSlice,
    doctor: doctorSlice,
    appointment: appointmentSlice,
  },
});

export default store;
