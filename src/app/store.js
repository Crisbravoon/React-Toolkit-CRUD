
import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../features/tasks/taskSlice";

export const store = configureStore({
    //**  Definimos nuestro Reducer.
    reducer: {
        // ** Agregamos nuestro Reducer.
        tasks: taskSlice
    },
    preloadedState: {
        // !Esto es NECESARIO para cargar los datos al iniciar la app
        tasks: JSON.parse(localStorage.getItem('tasks')) || []
    }
});

//!  Esto se ejecuta cada vez que hay un cambio en el estado de Redux
store.subscribe(() => {
    localStorage.setItem('tasks', JSON.stringify(store.getState().tasks));
});
