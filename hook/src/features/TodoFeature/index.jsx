import React, { useEffect, useState } from "react";
import PostFeature from "./components/PostFeature";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function TodoFeature() {
  const listTask = [
    {
      id: 1,
      task: "react-js",
    },
    {
      id: 2,
      task: "vue-js",
    },
    {
      id: 3,
      task: "node-js",
    },
    {
      id: 4,
      task: "mongo-db",
    },
    {
      id: 5,
      task: "angular-js",
    },
  ];
  const [listTodo, setListTodo] = useState(() => {
    return listTask;
  });
  const [posts, setPosts] = useState(() => {
    return [];
  });
  useEffect(() => {
    async function fetchAPI() {
      try {
        const requestAPI = `http://js-post-api.herokuapp.com/api/posts?_limit=10`;
        const response = await fetch(requestAPI);
        const responseAPI = await response.json();
        const { data } = responseAPI;
        setPosts(data);
      } catch (error) {
        console.log("fetch error: ", error.message);
      }
    }
    fetchAPI();
  }, []);
  const handlerClickTask = (task) => {
    // clone array
    const cloneListTodo = [...listTodo];

    // remove item when click
    const index = cloneListTodo.findIndex((x) => x.id === task.id);
    cloneListTodo.splice(index, 1);

    // set state
    setListTodo(cloneListTodo);
  };
  const handlerFormValues = (value) => {
    const cloneListTodo = [...listTodo];

    const newTodo = {
      id: listTodo.length + 1,
      ...value,
    };

    cloneListTodo.push(newTodo);

    setListTodo(cloneListTodo);
  };
  return (
    <div>
      <TodoForm handlerFormValues={handlerFormValues}></TodoForm>
      <TodoList
        listTodo={listTodo}
        handlerClickTask={handlerClickTask}
      ></TodoList>
      <PostFeature posts={posts} />
    </div>
  );
}

export default TodoFeature;
