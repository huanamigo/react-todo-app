import React from 'react';
import styles from './ToDoItem.module.scss';

function Item(props) {
  return (
    <div className={styles.container}>
      {props.task.important ? <div className={styles.vl}></div> : null}
      <div
        className={styles.taskContainer}
        onClick={() => props.change(props.task.id)}
      >
        <span className={styles.taskText}>{props.task.text}</span>
        <span className={styles.date}>{props.task.date}</span>
      </div>

      <div>
        <span className={styles.doneDate}>
          {props.task.active
            ? null
            : new Date(props.task.doneDate).toLocaleString()}
        </span>

        <button
          className={styles.delete}
          onClick={() => props.delete(props.task.id)}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Item;
