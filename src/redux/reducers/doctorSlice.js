import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  doctors: [],
  doctor: {},
  availableDoctors: [],
  error: null,
};

const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    doctorRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDoctorsSuccess(state, action) {
      state.loading = false;
      state.doctors = action.payload.doctors;
    },
    fetchAvailableDoctorsSuccess(state, action) {
      state.loading = false;
      state.availableDoctors = action.payload.doctors;
    },
    getDoctorByIdSuccess(state, action) {
      state.loading = false;
      state.doctor = action.payload.doctor;
    },
    doctorFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addDoctor(state, action) {
      state.loading = false;
      state.doctors.push(action.payload.doctor);
    },
    updateDoctorSuccess(state, action) {
      state.loading = false;
      const index = state.doctors.findIndex(doc => doc._id === action.payload._id);
      if (index !== -1) {
        state.doctors[index] = action.payload;
      }
    },
    updateDoctorAvailability(state, action) {
      state.loading = false;
      const index = state.doctors.findIndex(doc => doc._id === action.payload._id);
      if (index !== -1) {
        state.doctors[index] = action.payload;
      }
    },
    deleteDoctorSuccess(state, action) {
      state.loading = false;
      state.doctors = state.doctors.filter(doc => doc._id !== action.payload);
    },
  },
});

export const {
  doctorRequest,
  fetchDoctorsSuccess,
  fetchAvailableDoctorsSuccess,
  getDoctorByIdSuccess,
  doctorFail,
  addDoctor,
  updateDoctorSuccess,
  updateDoctorAvailability,
  deleteDoctorSuccess,
} = doctorSlice.actions;

export default doctorSlice.reducer;
