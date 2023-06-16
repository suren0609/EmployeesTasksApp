import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  tasks: [],
};

export const getTasks = createAsyncThunk(
  "tasks/getTasks",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(process.env.REACT_APP_DATA_URL + "/tasks");
    dispatch(setTasks(res.data));
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
    const res = await axios.post(`${process.env.REACT_APP_DATA_URL}/tasks`, data);
    dispatch(addTask(res.data));
  }
)


export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    delTask: (state, action) => {
      state.tasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
  },
  extraReducers: {
    [getTasks.fulfilled]: () => console.log("fulfilled"),
    [getTasks.pending]: () => console.log("pending"),
    [getTasks.rejected]: () => console.log("rejected"),
    [deleteTask.fulfilled]: () => console.log("fulfilled"),
    [deleteTask.pending]: () => console.log("pending"),
    [deleteTask.rejected]: () => console.log("rejected"),
  },
});

export const { setTasks, delTask, addTask } = taskSlice.actions;

export default taskSlice.reducer;
