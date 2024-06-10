import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrementByAmount,
  incrementByAmount,
} from "./redux/slices/calculatorSlice";
import { useRef } from "react";

// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {
  const num = useRef(0);
  const calculator = useSelector((state) => state.calculator);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input ref={num} /> 만큼을{" "}
        <button
          onClick={() => {
            dispatch(incrementByAmount(+num.current.value));
            num.current.value = "";
          }}
        >
          더할게요
        </button>{" "}
        <button
          onClick={() => {
            dispatch(decrementByAmount(+num.current.value));
            num.current.value = "";
          }}
        >
          뺄게요
        </button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{calculator}</p>
      </div>
    </div>
  );
}

export default App;
