import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesReducer";

export const store = configureStore({
    reducer : {
        categories : categoriesReducer
    }
})