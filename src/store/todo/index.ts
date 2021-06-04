import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { TodoProps } from '../../interfaces/todo';

const serialisedState = localStorage.getItem('@todoListBaires:todoList');
const initialState =
  serialisedState === null
    ? {
        todos: [] as TodoProps[],
      }
    : {
        todos: JSON.parse(serialisedState) as TodoProps[],
      };
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<TodoProps>) => {
        const newState = [...state.todos, action.payload];
        const serializedState = JSON.stringify(newState);
        localStorage.setItem('@todoListBaires:todoList', serializedState);
        return { todos: newState };
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
      const newState = state.todos.filter(todo => todo.id !== action.payload);
      const serializedState = JSON.stringify(newState);
      localStorage.setItem('@todoListBaires:todoList', serializedState);
      return { todos: newState };
    },
    toggleTodo(state, action: PayloadAction<string>) {
      const newState = state.todos.find(todo => todo.id === action.payload);
      if (newState) {
        newState.complete = !newState.complete;
      }
      const serializedState = JSON.stringify(state.todos);
      localStorage.setItem('@todoListBaires:todoList', serializedState);
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
