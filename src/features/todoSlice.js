import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todoList",
    initialState: { list : []},
    reducers: {
        setPosts: (state, action) => {
            state.list = action.payload
        }
    }
});

export const {setPosts} = todoSlice.actions;
export default todoSlice.reducer;