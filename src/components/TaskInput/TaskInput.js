import React, { useState } from 'react';

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

  return (
    <>
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter task"
        value={taskText}
        onChange={(e) => addTaskText(e.target.value)}
      />
      <input
        type="checkbox"
        name=""
        id=""
        checked={taskPriority}
        onChange={(e) => addTaskPriority(e.target.checked)}
      />
      <span>
        do kiedy{' '}
        <input
          type="date"
          name=""
          id="chuj"
          min={today}
          max={Number(today.slice(0, 4)) + 2 + '-12-31'}
          value={taskDate}
          onChange={(e) => addTaskDate(e.target.value)}
        />
      </span>
      <button onClick={handleAdd}>ADD</button>
    </>
  );
}

export default TaskInput;
