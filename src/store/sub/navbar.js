import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    links: [
      {
        id: 0,
        name: "",
        icon: "",
      },
    ],
  },

  reducers: {},
});
