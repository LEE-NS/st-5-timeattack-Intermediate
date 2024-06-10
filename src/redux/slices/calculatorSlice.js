// TODO: result 상태와 덧셈, 뺄셈에 대한 상태변경 로직을 담은 slice를 만들어 보세요.
import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

export const counterSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state += action.payload;
      return state;
    },
    decrementByAmount: (state, action) => {
      state -= action.payload;
      return state;
    },
  },
});

export const { incrementByAmount, decrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
