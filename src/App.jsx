import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TaskForm from './components/TaskForm.jsx';
import TaskList from './components/TaskList.jsx';
function App() {
  return (
      <div className='App bg-zinc-900 h-screen text-white'>
        <div className='flex items-center justify-center h-full'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/tasks" element={<TaskForm />} />
            <Route path="/editTask/:id" element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
        </div>
      </div>
  )
};

export default App
