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

export const deleteEmployee = createAsyncThunk(
  "employees/deleteEmployee",
  async (empId, { rejectWithValue, dispatch }) => {
    await axios.delete(`${process.env.REACT_APP_EMPLOYEES_URL}/${empId}`);
    dispatch(deleteEmp(empId));
  }
);

export const addEmployee = createAsyncThunk(
  "employees/addEmployee",
  async (data, { rejectWithValue, dispatch }) => {
    await axios.post(`${process.env.REACT_APP_EMPLOYEES_URL}`, { data });
    dispatch(addEmp(data));
  }
);

export const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
    deleteEmp: (state, action) => {
      state.employees = state.employees.filter(
        (emp) => emp.id !== action.payload
      );
    },
    addEmp: (state, action) => {
      state.employees.unshift(action.payload);
    },
  },
  extraReducers: {
    [getEmployees.fulfilled]: () => console.log("fulfilled"),
    [getEmployees.pending]: () => console.log("pending"),
    [getEmployees.rejected]: () => console.log("rejected"),
    [deleteEmployee.fulfilled]: () => console.log("fulfilled"),
    [deleteEmployee.pending]: () => console.log("pending"),
    [deleteEmployee.rejected]: () => console.log("rejected"),
    [addEmployee.fulfilled]: () => console.log("fulfilled"),
    [addEmployee.pending]: () => console.log("pending"),
    [addEmployee.rejected]: () => console.log("rejected"),
  },
});

export const { setEmployees, deleteEmp, addEmp } = employeeSlice.actions;
export default employeeSlice.reducer;
