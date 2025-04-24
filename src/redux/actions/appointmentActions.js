import axios from "axios";
const server = import.meta.env.VITE_BACKEND_URL;

import {
  appointmentRequest,
  fetchAppointmentsSuccess,
  getAppointmentByDateSuccess,
  appointmentFail,
  addAppointment,
} from "../reducers/appointmentSlice";

// Get all appointments
export const getAppointments = () => async (dispatch) => {
  try {
    dispatch(appointmentRequest());

    const { data } = await axios.get(`${server}/appoints`);

    dispatch(fetchAppointmentsSuccess(data));
  } catch (error) {
    dispatch(
      appointmentFail(error.response?.data?.message || "Failed to fetch appointments")
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
      appointmentFail(error.response?.data?.message || "Failed to fetch appointment by date")
    );
  }
};

// Create appointment
export const createAppointment = (id, appointmentData) => async (dispatch) => {
  try {
    dispatch(appointmentRequest());

    const { data } = await axios.post(`${server}/appoint/${id}`, appointmentData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch(addAppointment(data));
    dispatch(getAppointments());
  } catch (error) {
    dispatch(
      appointmentFail(error.response?.data?.message || "Failed to create appointment")
    );
  }
};
