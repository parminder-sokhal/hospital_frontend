import axios from "axios";
import {
  userRequest,
  userRegisterSuccess,
  userLoginSuccess,
  userFail,
  logoutUser,
} from "../reducers/userSlice";

const server = import.meta.env.VITE_BACKEND_URL;

// Register user
export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch(userRequest());

    const { data } = await axios.post(`${server}/register`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch(userRegisterSuccess(data));
  } catch (error) {
    dispatch(
      userFail(error.response?.data?.message || "Registration failed")
    );
  }
};

// Login user
export const loginUser = (credentials) => async (dispatch) => {
  try {
    dispatch(userRequest());

    const { data } = await axios.post(`${server}/login`, credentials, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,

    });
    localStorage.setItem("Bearer", data.token);
dispatch(userLoginSuccess(data));

  } catch (error) {
    dispatch(
      userFail(error.response?.data?.message || "Login failed")
    );
  }
};

// Optional logout action
export const logout = () => (dispatch) => {
  dispatch(logoutUser());
};
