import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { TodoProps } from '../../interfaces/todo';

const initialState = {
  todos: [] as TodoProps[],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<TodoProps>) => {
        state.todos.push(action.payload);
      },
      prepare: (description: string) => ({
        payload: {
          id: uuid(),
          content: description,
          complete: false,
        } as TodoProps,
      }),
    },
    removeTodo(state, action: PayloadAction<string>) {
      const index = state.todos.findIndex(todo => todo.id === action.payload);
      state.todos.splice(index, 1);
    },
    toggleTodo(state, action: PayloadAction<string>) {
      const index = state.todos.findIndex(todo => todo.id === action.payload);
      // eslint-disable-next-line no-param-reassign
      state.todos[index].complete = !state.todos[index].complete;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
