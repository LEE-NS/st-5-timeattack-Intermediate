import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/slices/todoSlice";

// Hint: TodoItem 컴포넌트는 props 를 받습니다.
export default function TodoItem({ eachFilteredTodo }) {
  const dispatch = useDispatch();

  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid black",
        width: "500px",
        height: "150px",
      }}
    >
      <section>
        <p>제목: {eachFilteredTodo.title}</p>
        <p>내용: {eachFilteredTodo.task}</p>
      </section>
      <section>
        <button
          onClick={() => {
            dispatch(updateTodo(eachFilteredTodo.id));
          }}
        >
          {eachFilteredTodo.isDone ? "취소" : "완료"}
        </button>
        <button
          onClick={() => {
            dispatch(deleteTodo(eachFilteredTodo.id));
          }}
        >
          삭제
        </button>
      </section>
    </li>
  );
}
