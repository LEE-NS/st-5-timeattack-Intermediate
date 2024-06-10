import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

export default function TodoForm() {
  const dispatch = useDispatch();
  const todoTitle = useRef("");
  const todoTask = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: todoTitle.current.value,
      task: todoTask.current.value,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    todoTitle.current.value = "";
    todoTask.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>제목: </label>
      <input type="text" ref={todoTitle} /> <label>내용: </label>
      <input type="text" ref={todoTask} />
      <button>추가</button>
    </form>
  );
}
