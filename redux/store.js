import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";

/**
 * Store redux
 */
export const store = configureStore({
    reducer: {
        user: userSlice,
    },
})