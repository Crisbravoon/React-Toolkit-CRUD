
//! Se definen las funciones de los estados.

import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {

        addTask: (state, action) => {
            state.push(action.payload);
        },

        deleteTask: (state, action) => {
            return state.filter(tasks => tasks.id !== action.payload);
        },

        editTask: (state, action) => {
            return state.map( task => 
                task.id === action.payload.id ? {...task, ...action.payload} : task
            )
        }
    }
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
