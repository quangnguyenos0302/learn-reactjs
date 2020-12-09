import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  listTodo: PropTypes.array,
  handlerClickTask: PropTypes.func,
};

TodoList.defaultProps = {
  listTodo: [],
  handlerClickTask: null,
};

function TodoList(props) {
  const { listTodo, handlerClickTask } = props;
  const clickTodo = (task) => {
    handlerClickTask(task);
  };
  return (
    <ul>
      {listTodo.map((task) => {
        return (
          <li
            key={task.id}
            onClick={() => clickTodo(task)}
            style={{ cursor: "pointer" }}
          >
            {task.task}
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
