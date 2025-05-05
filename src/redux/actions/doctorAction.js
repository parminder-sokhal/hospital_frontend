import axios from "axios";
const server = import.meta.env.VITE_BACKEND_URL;

import {
  doctorRequest,
  fetchDoctorsSuccess,
  doctorFail,
  addDoctor,
  updateDoctorAvailability,
  getDoctorByIdSuccess,
  deleteDoctorSuccess,
  updateDoctorSuccess,
  fetchAvailableDoctorsSuccess,
} from "../reducers/doctorSlice";

// Get all doctors
export const getDoctors = () => async (dispatch) => {
  try {
    dispatch(doctorRequest());
    const { data } = await axios.get(`${server}/doctors`);
    dispatch(fetchDoctorsSuccess(data));
  } catch (error) {
    dispatch(doctorFail(error.response?.data?.message || "Failed to fetch doctors"));
  }
};

// Get available doctors
export const getAvailableDoctors = () => async (dispatch) => {
  try {
    dispatch(doctorRequest());
    const { data } = await axios.get(`${server}/available-doctors`);
    dispatch(fetchAvailableDoctorsSuccess(data));
  } catch (error) {
    dispatch(doctorFail(error.response?.data?.message || "Failed to fetch available doctors"));
  }
};

// Get doctor by ID
export const getDoctorById = (id) => async (dispatch) => {
  try {
    dispatch(doctorRequest());
    const { data } = await axios.get(`${server}/doctor/${id}`);
    dispatch(getDoctorByIdSuccess(data));
  } catch (error) {
    dispatch(doctorFail(error.response?.data?.message || "Failed to fetch doctor"));
  }
};

// Create doctor
export const createDoctor = (doctorData) => async (dispatch) => {
  try {
    dispatch(doctorRequest());
    const token = localStorage.getItem("Bearer");

    const { data } = await axios.post(`${server}/doctor`, doctorData, {
      headers: {
        Authorization: `Bearer ${token}`,
        // Content-Type will be set automatically by Axios
      },
    });

    dispatch(addDoctor(data));
    dispatch(getDoctors());
  } catch (error) {
    console.error("Create doctor error:", error);
    dispatch(doctorFail(error.response?.data?.message || "Failed to create doctor"));
  }
};

// Update doctor
export const updateDoctor = (id, updatedData) => async (dispatch) => {
  try {
    dispatch(doctorRequest());
    const token = localStorage.getItem("Bearer");

    const { data } = await axios.put(`${server}/doctor/${id}`, updatedData, {
      headers: {
        Authorization: `Bearer ${token}`,
        // Don't set Content-Type manually for FormData
      },
    });

    dispatch(updateDoctorSuccess(data));
    dispatch(getDoctors());
  } catch (error) {
    console.error("Update doctor error:", error);
    dispatch(doctorFail(error.response?.data?.message || "Failed to update doctor"));
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
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    dispatch(updateDoctorAvailability(data));
    dispatch(getDoctors());
  } catch (error) {
    dispatch(doctorFail(error.response?.data?.message || "Failed to update availability"));
  }
};

// Delete doctor
export const deleteDoctor = (id) => async (dispatch) => {
  try {
    dispatch(doctorRequest());
    const token = localStorage.getItem("Bearer"); // Fetch token

    const { data }=await axios.delete(`${server}/doctor/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(deleteDoctorSuccess(data));
    dispatch(getDoctors());
  } catch (error) {
    dispatch(doctorFail(error.response?.data?.message || "Failed to delete doctor"));
  }
};
