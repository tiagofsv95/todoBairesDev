import { createStore } from 'redux';
import todo from './todo';

export const store = createStore(todo);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
