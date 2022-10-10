// import './App.css';
import React from 'react';
import { TodoProvider } from './TodoContext';
import { AppUI } from './components/AppUI.js';

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
    
  )
}
export default App;
