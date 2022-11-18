import { useState } from 'react';
import styles from './App.module.scss';
import TaskInput from './components/TaskInput/TaskInput';
import ToDoTasks from './components/ToDoTasks/ToDoTasks';

function App() {
  const [tasks, changeTasks] = useState([
    {
      id: 1,
      text: 'first',
      date: '2022-12-27',
      important: true,
      active: true,
      doneDate: null,
    },
    {
      id: 2,
      text: 'second',
      date: '2023-01-17',
      important: false,
      active: true,
      doneDate: null,
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, excepturi.',
      date: '2022-11-16',
      important: true,
      active: true,
      doneDate: null,
    },
  ]);
  const [input, showInput] = useState(false);

  const deleteTask = (id) => {
    const tasksArr = [...tasks];
    const index = tasksArr.findIndex((task) => task.id === id);
    tasksArr.splice(index, 1);

    changeTasks(tasksArr);
  };

  const changeStatus = (id) => {
    const tasksArr = [...tasks];
    const index = tasksArr.findIndex((task) => task.id === id);

    tasksArr[index].active = !tasksArr[index].active;

    if (tasksArr[index].active) {
      tasksArr[index].doneDate = null;
    } else {
      tasksArr[index].doneDate = Date.now();
    }

    changeTasks(tasksArr);
  };

  const addTask = (text, date, important) => {
    if (text.length < 2) return alert('dupa');

    const newTask = {
      id: Date.now(),
      text: text,
      date: date,
      important: important,
      active: true,
      doneDate: null,
    };

    const tasksArr = [...tasks];
    tasksArr.push(newTask);

    changeTasks(tasksArr);
  };

  return (
    <>
      <TaskInput add={addTask} show={input} cancel={showInput} />
      <ToDoTasks tasks={tasks} delete={deleteTask} change={changeStatus} />
      <button onClick={() => showInput(!input)} className={styles.addBtn}>
        +
      </button>
    </>
  );
}

export default App;
