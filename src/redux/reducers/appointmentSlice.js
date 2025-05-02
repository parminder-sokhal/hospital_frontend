import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  appointments: [],
  appointmentsByDate: [], // 🔹 Add this line
  appointment: {},
  error: null,
};

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    appointmentRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchAppointmentsSuccess(state, action) {
      state.loading = false;
      state.appointments = action.payload.appointments;
    },
    getAppointmentByDateSuccess(state, action) {
      state.loading = false;
      state.appointmentsByDate = action.payload.appointments; // 🔹 Fix here
    },
    appointmentFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addAppointment(state, action) {
      state.loading = false;
      state.appointments.push(action.payload.appointment);
    },
  },
});

export const {
  appointmentRequest,
  fetchAppointmentsSuccess,
  getAppointmentByDateSuccess,
  appointmentFail,
  addAppointment,
} = appointmentSlice.actions;

export default appointmentSlice.reducer;
