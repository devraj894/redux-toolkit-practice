import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "../features/todoSlice/todoSlice";

export const store = configureStore({
    reducer: todoReducers
});