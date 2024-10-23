import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice';
import { Link } from 'react-router-dom';

const TaskList = () => {

  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const handleDelte = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className='w-4/6'>
      <header className='flex justify-between items-center py-4'>
        <h1>Total Task: {tasks.length}</h1>
        <Link to='/tasks' className='bg-indigo-600 py-1 px-2 rounded-md text-sm'>
          <button>Create New Task</button>
        </Link>
      </header>
      <div className='grid grid-cols-3 gap-3'>
        {tasks.map((task) => (
          <div key={task.id} className='bg-neutral-800 p-4 rounded-md'>
            <header className='flex justify-between '>
              <h3>{task.title}</h3>
              <div className='flex gap-x-2'>
                <Link className='bg-zinc-600 px-2 py-1 text-md rounded-md' to={`/editTask/${task.id}`}>
                  <button > Edit </button>
                </Link>
                <button className='bg-red-600 px-2 py-1 text-md rounded-md'
                  onClick={() => handleDelte(task.id)}> Delete </button>
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskList