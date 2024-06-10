import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList({ isDone }) {
  const todo = useSelector((state) => state.todo);
  const filteredTodo = todo.filter((eachTodo) => eachTodo.isDone === isDone);

  return (
    <section>
      <h2>{isDone ? "Done" : "Working..."}</h2>
      <ul>
        {filteredTodo.map((eachFilteredTodo) => (
          <TodoItem
            key={eachFilteredTodo.id}
            eachFilteredTodo={eachFilteredTodo}
          />
        ))}
      </ul>
    </section>
  );
}
