import axios from "axios";
const server = import.meta.env.VITE_BACKEND_URL;

import {
  doctorRequest,
  fetchDoctorsSuccess,
  doctorFail,
  addDoctor,
  updateDoctorAvailability,
  getDoctorByIdSuccess,
} from "../reducers/doctorSlice";

// Get all doctors
export const getDoctors = () => async (dispatch) => {
  try {
    dispatch(doctorRequest());

    const { data } = await axios.get(`${server}/doctors`);

    dispatch(fetchDoctorsSuccess(data));
  } catch (error) {
    dispatch(
      doctorFail(error.response?.data?.message || "Failed to fetch doctors")
    );
  }
};

// Get doctor by ID
export const getDoctorById = (id) => async (dispatch) => {
  try {
    dispatch(doctorRequest());

    const { data } = await axios.get(`${server}/doctor/${id}`);

    dispatch(getDoctorByIdSuccess(data));
  } catch (error) {
    dispatch(
      doctorFail(error.response?.data?.message || "Failed to fetch doctor")
    );
  }
};

// Create doctor
export const createDoctor = (doctorData) => async (dispatch) => {
  try {
    dispatch(doctorRequest());

    const { data } = await axios.post(`${server}/doctor`, doctorData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch(addDoctor(data));
    dispatch(getDoctors());
  } catch (error) {
    dispatch(
      doctorFail(error.response?.data?.message || "Failed to create doctor")
    );
  }
};

// Update doctor availability
export const changeDoctorAvailability = (id, availabilityData) => async (dispatch) => {
  try {
    dispatch(doctorRequest());

    const { data } = await axios.put(
      `${server}/doctor/${id}/availability`,
      availabilityData,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch(updateDoctorAvailability(data));
    dispatch(getDoctors());
  } catch (error) {
    dispatch(
      doctorFail(
        error.response?.data?.message || "Failed to update availability"
      )
    );
  }
};
