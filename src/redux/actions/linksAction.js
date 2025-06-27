import axios from "axios";
const server = import.meta.env.VITE_BACKEND_URL;

import {
  linkRequest,
  fetchLinksSuccess,
  linkFail,
  addLinkSuccess,
  deleteLinkSuccess,
} from "../reducers/linksSlice";

// Get all social links
export const getLinks = () => async (dispatch) => {
  try {
    dispatch(linkRequest());
    const { data } = await axios.get(`${server}/social-links`);
    dispatch(fetchLinksSuccess(data));
  } catch (error) {
    dispatch(
      linkFail(error.response?.data?.message || "Failed to fetch links")
    );
  }
};

// Create a new social link
export const createLink = (linkData) => async (dispatch) => {
  try {
    dispatch(linkRequest());
    const token = localStorage.getItem("Bearer");

    const { data } = await axios.post(`${server}/social-links`, linkData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    dispatch(addLinkSuccess({ data: data.data }));
    dispatch(getLinks());
  } catch (error) {
    dispatch(
      linkFail(error.response?.data?.message || "Failed to create link")
    );
  }
};

// Delete a social link
export const deleteLink = (id) => async (dispatch) => {
  try {
    dispatch(linkRequest());
    const token = localStorage.getItem("Bearer");

    await axios.delete(`${server}/social-links/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(deleteLinkSuccess(id));
    dispatch(getLinks());
  } catch (error) {
    dispatch(
      linkFail(error.response?.data?.message || "Failed to delete link")
    );
  }
};
