import { configureStore } from "@reduxjs/toolkit";
import doctorSlice from "./reducers/doctorSlice.js";
import appointmentSlice from "./reducers/appointmentSlice.js";
import userSlice from "./reducers/userSlice.js";
import paymentSlice from "./reducers/paymentSlice.js";

const store = configureStore({
  reducer: {
    doctor: doctorSlice,
    appointment: appointmentSlice,
    user: userSlice,
    payment: paymentSlice,
  },
});

export default store;
