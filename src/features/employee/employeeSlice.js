import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  employees: [],
};

export const getEmployees = createAsyncThunk(
  "employees/getEmployees",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(process.env.REACT_APP_EMPLOYEES_URL);
    dispatch(setEmployees(res.data));
  }
);

export const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
  },
  extraReducers: {
    [getEmployees.fulfilled]: () => console.log("fulfilled"),
    [getEmployees.pending]: () => console.log("pending"),
    [getEmployees.rejected]: () => console.log("rejected"),
  },
});

export const { setEmployees } = employeeSlice.actions;
export default employeeSlice.reducer;
