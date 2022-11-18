import React, { useState } from 'react';
import styles from './TaskInput.module.scss';

function TaskInput(props) {
  const [taskText, addTaskText] = useState('');
  const [taskDate, addTaskDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [taskPriority, addTaskPriority] = useState(false);

  const today = new Date().toISOString().slice(0, 10);

  const handleAdd = () => {
    props.add(taskText, taskDate, taskPriority);
  };

  const clearInput = () => {
    addTaskDate(new Date().toISOString().slice(0, 10));
    addTaskText('');
    addTaskPriority(false);
  };

  return (
    <div className={props.show ? styles.show : styles.hide}>
      <h1 className={styles.h1}>NEW NOTE</h1>
      <div className={styles.container}>
        <span>Name</span>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter task"
          value={taskText}
          onChange={(e) => addTaskText(e.target.value)}
        />
      </div>
      <div className={styles.tiles}>
        <div className={styles.container}>
          <span>Priority</span>
          <input
            className={styles.priority}
            type="checkbox"
            name=""
            id=""
            checked={taskPriority}
            onChange={(e) => addTaskPriority(e.target.checked)}
          />
        </div>

        <div className={`${styles.container} ${styles.dateContainer}`}>
          <span>Date</span>
          <input
            className={styles.datePicker}
            type="date"
            name=""
            min={today}
            max={Number(today.slice(0, 4)) + 2 + '-12-31'}
            value={taskDate}
            onChange={(e) => addTaskDate(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.buttons}>
        <button
          onClick={() => {
            clearInput();
            props.cancel(false);
          }}
          className={styles.button}
        >
          CANCEL
        </button>
        <button
          onClick={() => {
            handleAdd();
            clearInput();
            props.cancel(false);
          }}
          className={styles.button}
        >
          ADD
        </button>
      </div>
    </div>
  );
}

export default TaskInput;
