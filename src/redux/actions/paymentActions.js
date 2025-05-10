import axios from "axios";
const server = import.meta.env.VITE_BACKEND_URL;

import {
  paymentRequest,
  paymentSuccess,
  allPaymentsSuccess,
  paymentFail,
} from "../reducers/paymentSlice";

// Get token from localStorage
const getAuthHeaders = () => {
  const token = localStorage.getItem("Bearer");
  return {
    Authorization: `Bearer ${token}`,
  };
};

// Create Razorpay order
export const createPaymentOrder = (appointmentId) => async (dispatch) => {
  try {
    dispatch(paymentRequest());

    const { data } = await axios.post(
      `${server}/payment/create/${appointmentId}`,
      {},
      { headers: getAuthHeaders() }
    );

    dispatch(paymentSuccess(data));
    return data;
  } catch (error) {
    dispatch(
      paymentFail(error.response?.data?.message || "Failed to create payment order")
    );
    throw error;
  }
};

// Verify Razorpay payment
export const verifyPayment = (verificationData) => async (dispatch) => {
  try {
    dispatch(paymentRequest());

    const { data } = await axios.post(
      `${server}/payment/verify`,
      verificationData,
      { headers: getAuthHeaders() }
    );

    dispatch(paymentSuccess(data));
    return data;
  } catch (error) {
    dispatch(
      paymentFail(error.response?.data?.message || "Payment verification failed")
    );
    throw error;
  }
};

// Get all payments
export const getAllPayments = () => async (dispatch) => {
  try {
    dispatch(paymentRequest());

    const { data } = await axios.get(`${server}/payment/all`, {
      headers: getAuthHeaders(),
    });

    dispatch(allPaymentsSuccess(data));
  } catch (error) {
    dispatch(
      paymentFail(error.response?.data?.message || "Failed to fetch payments")
    );
  }
};

// Get payments by specific date
export const getPaymentsByDate = (date) => async (dispatch) => {
  try {
    dispatch(paymentRequest());

    const { data } = await axios.post(
      `${server}/payment/date`,
      { date },
      { headers: getAuthHeaders() }
    );

    dispatch(allPaymentsSuccess(data));
  } catch (error) {
    dispatch(
      paymentFail(error.response?.data?.message || "Failed to fetch payments by date")
    );
  }
};

// ✅ New API: Get all payment details with Authorization header
export const getAllPaymentDetails = () => async (dispatch) => {
  try {
    dispatch(paymentRequest());

    const { data } = await axios.get(`${server}/payment/all/details`, {
      headers: getAuthHeaders(),
    });

    dispatch(allPaymentsSuccess(data));
  } catch (error) {
    dispatch(
      paymentFail(error.response?.data?.message || "Failed to fetch detailed payments")
    );
  }
};
