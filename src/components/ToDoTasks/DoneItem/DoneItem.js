import React from 'react';
import styles from '../ToDoItem/ToDoItem.module.scss';

function Item(props) {
  return (
    <div className={styles.container}>
      <div
        className={styles.taskContainer}
        onClick={() => props.change(props.task.id)}
      >
        <span className={`${styles.taskText} ${styles.doneText} `}>
          {props.task.text}
        </span>

        <div className={styles.dateContainer}>
          <span>Done at:</span>
          <br />
          <span>
            {props.task.active
              ? null
              : new Date(props.task.doneDate).toLocaleString()}
          </span>
        </div>
      </div>

      <div>
        <button className="delete" onClick={() => props.delete(props.task.id)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Item;
