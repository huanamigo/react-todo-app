import { useState } from 'react';
import './App.css';
import TaskInput from './components/TaskInput/TaskInput';
import ToDoTasks from './components/ToDoTasks/ToDoTasks';

function App() {
  const [tasks, changeTasks] = useState([
    {
      id: 1,
      text: 'jeden',
      date: '2022-11-14',
      important: true,
      active: true,
      doneDate: null,
    },
    {
      id: 2,
      text: 'dwa',
      date: '2022-11-16',
      important: false,
      active: true,
      doneDate: null,
    },
    {
      id: 3,
      text: 'trzy',
      date: '2022-11-16',
      important: true,
      active: true,
      doneDate: null,
    },
  ]);

  const deleteTask = (id) => {
    console.log('delete ' + id);

    const tasksArr = [...tasks];
    const index = tasksArr.findIndex((task) => task.id === id);
    tasksArr.splice(index, 1);

    changeTasks(tasksArr);
  };

  const changeStatus = (id) => {
    console.log('change ' + id);

    const tasksArr = [...tasks];
    const index = tasksArr.findIndex((task) => task.id === id);

    tasksArr[index].active = !tasksArr[index].active;

    if (tasksArr[index].active) {
      tasksArr[index].doneDate = null;
    } else {
      tasksArr[index].doneDate = Date.now();
    }

    console.log(tasksArr);

    changeTasks(tasksArr);
  };

  return (
    <>
      <TaskInput />
      <hr />
      <ToDoTasks tasks={tasks} delete={deleteTask} change={changeStatus} />
    </>
  );
}

export default App;
