import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  links: [],
  error: null,
};

const linksSlice = createSlice({
  name: "links",
  initialState,
  reducers: {
    linkRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchLinksSuccess(state, action) {
      state.loading = false;
      state.links = action.payload.data; 
    },
    addLinkSuccess(state, action) {
      state.loading = false;
      state.links.unshift(action.payload.data); 
    },
    deleteLinkSuccess(state, action) {
      state.loading = false;
      state.links = state.links.filter(link => link._id !== action.payload);
    },
    linkFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  linkRequest,
  fetchLinksSuccess,
  addLinkSuccess,
  deleteLinkSuccess,
  linkFail,
} = linksSlice.actions;

export default linksSlice.reducer;
