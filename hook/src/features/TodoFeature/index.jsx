import React, { useState } from "react";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";

function TodoFeature(props) {
  const [todoList, setTodoList] = useState(() => {
    return [
      { id: 1, title: "I love Easy Frontend! 😍 " },
      { id: 2, title: "We love Easy Frontend! 🥰 " },
      { id: 3, title: "They love Easy Frontend! 🚀 " },
    ];
  });
  const onHandlerTodoClick = (todo) => {
    const newTodoList = [...todoList];
    const index = newTodoList.findIndex((element) => element.id === todo.id);
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };
  const onSubmitForm = (valueRecieve) => {
    const newTodoList = [...todoList];
    const newTodo = {
      id: todoList.length <= 0 ? 1 : todoList[todoList.length - 1].id + 1,
      ...valueRecieve,
    };
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
    console.log(newTodoList);
  };
  return (
    <div>
      <TodoAdd onSubmitForm={onSubmitForm} />
      <TodoList todoList={todoList} onHandlerTodoClick={onHandlerTodoClick} />
    </div>
  );
}

export default TodoFeature;
