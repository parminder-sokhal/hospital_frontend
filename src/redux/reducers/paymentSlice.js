import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  payments: [],
  payment: null,
  error: null,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    paymentRequest(state) {
      state.loading = true;
      state.error = null;
    },
    paymentSuccess(state, action) {
      state.loading = false;
      state.payment = action.payload.payment;
    },
    allPaymentsSuccess(state, action) {
      state.loading = false;
      state.payments = action.payload.payments;
    },
    paymentFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    clearPaymentState(state) {
      state.payment = null;
      state.error = null;
    },
  },
});

export const {
  paymentRequest,
  paymentSuccess,
  allPaymentsSuccess,
  paymentFail,
  clearPaymentState,
} = paymentSlice.actions;

export default paymentSlice.reducer;
