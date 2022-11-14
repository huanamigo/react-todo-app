import React from 'react';
import styles from './ToDoItem.module.scss';

function Item(props) {
  return (
    <div>
      <button className="done" onClick={() => props.change(props.task.id)}>
        Done
      </button>
      <span className={props.task.important ? styles.important : null}>
        {props.task.text}
      </span>
      <span>{props.task.date}</span>
      <span>
        {' '}
        {props.task.active
          ? null
          : new Date(props.task.doneDate).toLocaleString()}
      </span>
      <button className="delete" onClick={() => props.delete(props.task.id)}>
        Del
      </button>
    </div>
  );
}

export default Item;
