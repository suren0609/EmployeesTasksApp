import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  employees: [],
  employee: {},
};

export const getEmployees = createAsyncThunk(
  "employees/getEmployees",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(process.env.REACT_APP_DATA_URL + "/employees");
    dispatch(setEmployees(res.data));
  }
);
export const getOneEmployee = createAsyncThunk(
  "employees/getOneEmployee",
  async (id, { rejectWithValue, dispatch }) => {
    const res = await axios.get(
      process.env.REACT_APP_DATA_URL + "/employees/" + id
    );
    dispatch(setOneEmp(res.data));
  }
);

export const deleteEmployee = createAsyncThunk(
  "employees/deleteEmployee",
  async (empId, { rejectWithValue, dispatch }) => {
    await axios.delete(`${process.env.REACT_APP_DATA_URL}/employees/${empId}`);
    dispatch(deleteEmp(empId));
  }
);

export const addEmployee = createAsyncThunk(
  "employees/addEmployee",
  async (data, { rejectWithValue, dispatch }) => {
    const res = await axios.post(
      `${process.env.REACT_APP_DATA_URL}/employees`,
      data
    );
    dispatch(addEmp(res.data));
  }
);

export const updateEmployee = createAsyncThunk(
  "employees/updateEmployee",
  async (data, { rejectWithValue, dispatch }) => {
    await axios.put(
      `${process.env.REACT_APP_DATA_URL}/employees/${data.id}`,
      data
    );
    dispatch(updateEmp(data));
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
      state.employees.push(action.payload);
    },
    updateEmp: (state, action) => {
      state.employees = state.employees.map((emp) =>
        emp.id === action.payload.id ? (emp = action.payload) : emp
      );
    },
    setOneEmp: (state, action) => {
      state.employee = action.payload;
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
    [updateEmployee.fulfilled]: () => console.log("fulfilled"),
    [updateEmployee.pending]: () => console.log("pending"),
    [updateEmployee.rejected]: () => console.log("rejected"),
    [getOneEmployee.fulfilled]: () => console.log("fulfilled"),
    [getOneEmployee.pending]: () => console.log("pending"),
    [getOneEmployee.rejected]: () => console.log("rejected"),
  },
});

export const { setEmployees, deleteEmp, addEmp, updateEmp, setOneEmp } =
  employeeSlice.actions;
export default employeeSlice.reducer;
