import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../features/tasks/taskSlice';
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm = () => {

  // Estado para manejar el formulario.
  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  // Obtenemos el dispatch para disparar las acciones de Redux.
  const dispatch = useDispatch();

  // Obtenemos el navigate para navegar a otras rutas.
  const navigate = useNavigate();

  // Obtenemos las tareas para actualizar el estado según la URL:id
  const params = useParams();
  
  // Obtenemos las tareas.
  const tasks = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();

    if (params.id) {
      dispatch(editTask({
        ...task,
        id: params.id,
      }))
      navigate('/');

    } else {
      dispatch(addTask({
        ...task,
        id: uuid(),
      }));
      navigate('/');
    }
  };

  useEffect(() => {
    if (params.id) {
      // Si encontramos la tarea, actualizamos el estado
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params.id, tasks]);

  return (
    <form  className='bg-zinc-800 max-w-sm p-4' onSubmit={handleSubmit}>
      <label htmlFor='title' className='block text-sm font-bold'>Task:</label>
      <input
        className='w-full p-2 rounded-md bg-zinc-600 mb-4'
        name='title'
        type="text"
        placeholder='title'
        onChange={handleChange}
        value={task.title}
      />
      <label htmlFor='description' className='block text-sm font-bold'>Description:</label>
      <textarea
        className='w-full p-2 rounded-md bg-zinc-600 mb-4'
        name='description'
        placeholder='description'
        onChange={handleChange}
        value={task.description}
      />
      <button className='bg-indigo-600 px-4 py-1 rounded-md '>Save</button>
    </form>
  )
};

export default TaskForm;