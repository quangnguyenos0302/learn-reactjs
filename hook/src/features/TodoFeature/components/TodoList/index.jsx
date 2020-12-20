import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  onHandlerTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  onHandlerTodoClick: null,
};

function TodoList(props) {
  const { todoList, onHandlerTodoClick } = props;
  const handlerTodoClick = (todo) => {
    if (!onHandlerTodoClick) return;
    onHandlerTodoClick(todo);
  };
  return (
    <ul>
      {todoList.map((todo) => {
        return (
          <li key={todo.id} onClick={() => handlerTodoClick(todo)}>
            {todo.title}
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
