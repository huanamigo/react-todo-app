import React from 'react';
import ToDoItem from './ToDoItem/ToDoItem';
import DoneItem from './DoneItem/DoneItem';
import styles from './ToDoTasks.module.scss';

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
    <div className={styles.body}>
      <h1 className={styles.h1}>TASKS</h1>
      <div>
        {activeTasks.length > 0 ? (
          activeTasks
        ) : (
          <>
            <hr />
            <p>NOTHING HERE 😴</p>
            <p>ADD SOMETHING!</p>
            <hr />
          </>
        )}
      </div>

      <p>COMPLETED TASKS ({doneTasks.length})</p>
      <span className={styles.trivial}>
        {doneTasks.length > 3 ? (
          <>
            <p>UP TO 3 TASKS</p>
          </>
        ) : null}
      </span>
      <div>{doneTasks.slice(0, 3)}</div>
    </div>
  );
}

export default ToDoTasks;
