import axios from "axios";
const server = import.meta.env.VITE_BACKEND_URL;

import {
  appointmentRequest,
  fetchAppointmentsSuccess,
  getAppointmentByDateSuccess,
  appointmentFail,
  addAppointment,
  setHospitalVisitAppointments,
} from "../reducers/appointmentSlice";

// Get all appointments
export const getAppointments = () => async (dispatch) => {
  try {
    dispatch(appointmentRequest());

    const { data } = await axios.get(`${server}/appoints`);

    dispatch(fetchAppointmentsSuccess(data));
  } catch (error) {
    dispatch(
      appointmentFail(
        error.response?.data?.message || "Failed to fetch appointments"
      )
    );
  }
};

// Get appointment by date
export const getAppointmentByDate = (date) => async (dispatch) => {
  try {
    dispatch(appointmentRequest());

    const { data } = await axios.get(`${server}/appoints/${date}`);

    dispatch(getAppointmentByDateSuccess(data));
  } catch (error) {
    dispatch(
      appointmentFail(
        error.response?.data?.message || "Failed to fetch appointment by date"
      )
    );
  }
};

// Create appointment
// redux/actions/appointmentActions.js
export const createAppointment = (id, appointmentData) => async (dispatch) => {
  try {
    dispatch(appointmentRequest());

    const { data } = await axios.post(
      `${server}/appoint/${id}`,
      appointmentData,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch(addAppointment(data));
    dispatch(getAppointments());

    // ✅ RETURN data so the component can access it
    return data;
  } catch (error) {
    dispatch(
      appointmentFail(
        error.response?.data?.message || "Failed to create appointment"
      )
    );
    throw error; // Optional: propagate error
  }
};

export const getHospitalVisitAppointments = () => async (dispatch) => {
  try {
    dispatch(appointmentRequest());

    const token = localStorage.getItem("Bearer");

    const { data } = await axios.get(`${server}/offline/hospital-visit`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(setHospitalVisitAppointments(data));
  } catch (error) {
    dispatch(
      appointmentFail(
        error.response?.data?.message ||
          "Failed to fetch hospital visit appointments"
      )
    );
  }
};
