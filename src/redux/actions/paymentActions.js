import axios from "axios";
const server = import.meta.env.VITE_BACKEND_URL;

import {
  paymentRequest,
  paymentSuccess,
  allPaymentsSuccess,
  paymentFail,
} from "../reducers/paymentSlice";

// Create Razorpay order
export const createPaymentOrder = (appointmentId) => async (dispatch) => {
  try {
    dispatch(paymentRequest());

    const { data } = await axios.post(`${server}/payment/create/${appointmentId}`, {}, {
      headers: { "Content-Type": "application/json" },
    });

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

    const { data } = await axios.post(`${server}/payment/verify`, verificationData, {
      headers: { "Content-Type": "application/json" },
    });

    dispatch(paymentSuccess(data));
    return data;
  } catch (error) {
    dispatch(
      paymentFail(error.response?.data?.message || "Payment verification failed")
    );
    throw error;
  }
};

// Optional: Get all payments
export const getAllPayments = () => async (dispatch) => {
  try {
    dispatch(paymentRequest());

    const { data } = await axios.get(`${server}/payment/all`);
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

    const { data } = await axios.post(`${server}/payment/date`, { date }, {
      headers: { "Content-Type": "application/json" },
    });

    dispatch(allPaymentsSuccess(data));
  } catch (error) {
    dispatch(
      paymentFail(error.response?.data?.message || "Failed to fetch payments by date")
    );
  }
};
