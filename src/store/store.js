import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "../features/employee/employeeSlice";
import taskSlice from "../features/task/taskSlice";

export const store = configureStore({
  reducer: {
    employee: employeeSlice,
    task: taskSlice,
  },
});
