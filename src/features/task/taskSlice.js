import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  tasks: [],
  tasksEmp: [],
};

export const getTasks = createAsyncThunk(
  "tasks/getTasks",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(process.env.REACT_APP_DATA_URL + "/tasks");
    dispatch(setTasks(res.data));
  }
);

export const getTasksFromEmployee = createAsyncThunk(
  "tasks/getTasksFromEmployee",
  async (id, { rejectWithValue, dispatch }) => {
    const res = await axios.get(
      process.env.REACT_APP_DATA_URL + "/tasks?employeeId=" + id
    );
    dispatch(setTasksEmp(res.data));
  }
);

export const deleteTask = createAsyncThunk(
  "employees/deleteTask",
  async (taskId, { rejectWithValue, dispatch }) => {
    await axios.delete(`${process.env.REACT_APP_DATA_URL}/tasks/${taskId}`);
    dispatch(delTask(taskId));
  }
);

export const createTask = createAsyncThunk(
  "tasks/createTask",
  async (data, { rejectWithValue, dispatch }) => {
    const res = await axios.post(
      `${process.env.REACT_APP_DATA_URL}/tasks`,
      data
    );
    dispatch(addTask(res.data));
  }
);

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async (data, { rejectWithValue, dispatch }) => {
    await axios.put(`${process.env.REACT_APP_DATA_URL}/tasks/${data.id}`, data);
    dispatch(editTask(data));
  }
);

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    delTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? (task = action.payload) : task
      );
    },
    setTasksEmp: (state, action) => {
      state.tasksEmp = action.payload;
    },
  },
  extraReducers: {
    [getTasks.fulfilled]: () => console.log("fulfilled"),
    [getTasks.pending]: () => console.log("pending"),
    [getTasks.rejected]: () => console.log("rejected"),
    [deleteTask.fulfilled]: () => console.log("fulfilled"),
    [deleteTask.pending]: () => console.log("pending"),
    [deleteTask.rejected]: () => console.log("rejected"),
    [createTask.fulfilled]: () => console.log("fulfilled"),
    [createTask.pending]: () => console.log("pending"),
    [createTask.rejected]: () => console.log("rejected"),
    [updateTask.fulfilled]: () => console.log("fulfilled"),
    [updateTask.pending]: () => console.log("pending"),
    [updateTask.rejected]: () => console.log("rejected"),
    [getTasksFromEmployee.fulfilled]: () => console.log("fulfilled"),
    [getTasksFromEmployee.pending]: () => console.log("pending"),
    [getTasksFromEmployee.rejected]: () => console.log("rejected"),
  },
});

export const { setTasks, delTask, addTask, editTask, setTasksEmp } =
  taskSlice.actions;

export default taskSlice.reducer;
