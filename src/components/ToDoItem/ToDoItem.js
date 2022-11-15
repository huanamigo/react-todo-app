import React from 'react';
import styles from './ToDoItem.module.scss';

function Item(props) {
  return (
    <div className={styles.container}>
      <div>
        <span className={props.task.important ? styles.important : null}>
          {props.task.text}
        </span>
        <span className={styles.date}>{props.task.date}</span>
      </div>

      <div>
        <button className="done" onClick={() => props.change(props.task.id)}>
          <i class="fa-solid fa-circle-check"></i>
        </button>

        <span className={styles.doneDate}>
          {props.task.active
            ? null
            : new Date(props.task.doneDate).toLocaleString()}
        </span>

        <button className="delete" onClick={() => props.delete(props.task.id)}>
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Item;
