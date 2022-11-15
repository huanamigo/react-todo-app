import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import DoneItem from '../DoneItem/DoneItem';

function ToDoTasks(props) {
  const active = props.tasks.filter((task) => task.active);

  const activeTasks = active.map((task) => (
    <ToDoItem
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  const done = props.tasks.filter((task) => !task.active);

  const doneTasks = done.map((task) => (
    <DoneItem
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return (
    <>
      <h1>TASKS</h1>
      <div>{activeTasks.length > 0 ? activeTasks : <p>done</p>}</div>

      <p>COMPLETED TASKS ({doneTasks.length})</p>
      <span>{doneTasks.length > 2 ? <p>max 2</p> : null}</span>
      <div>{doneTasks.slice(0, 2)}</div>
    </>
  );
}

export default ToDoTasks;
