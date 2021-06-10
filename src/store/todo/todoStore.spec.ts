import { store } from '../index';
import { addTodo, removeTodo, toggleTodo } from './index';

describe('Tests for Todo Store', () => {
  it('Should be able to add new task on Store', async () => {
    const newTask = 'eat tacos';
    store.dispatch(addTodo(newTask));

    const { todos } = store.getState();

    expect(todos[todos.length - 1].content).toBe(newTask);
  });

  it('Should be able to remove task on Store', async () => {
    const newTask = 'call mom';
    store.dispatch(addTodo(newTask));

    const { todos } = store.getState();

    expect(todos[todos.length - 1].content).toBe(newTask);

    const [findNewTodo] = todos.filter(todo => todo.content === newTask);

    store.dispatch(removeTodo(findNewTodo.id));

    const { todos: todosAfterRemove } = store.getState();

    const todoBeforeRemove = todos.filter(todo => todo.id === findNewTodo.id);
    const removedTodo = todosAfterRemove.filter(
      todo => todo.id === findNewTodo.id,
    );

    expect(!!todoBeforeRemove).toBeTruthy();
    expect(removedTodo).toStrictEqual([]);
  });

  it('Should be able to toogle task to complete on Store', async () => {
    const newTask = 'call mom again';
    store.dispatch(addTodo(newTask));

    const { todos } = store.getState();

    expect(todos[todos.length - 1].content).toBe(newTask);

    const [findNewTodo] = todos.filter(todo => todo.content === newTask);

    store.dispatch(toggleTodo(findNewTodo.id));

    const { todos: todosAfterToogle } = store.getState();

    const [todoTaskToogle] = todosAfterToogle.filter(
      todo => todo.id === findNewTodo.id,
    );

    expect(todoTaskToogle.complete).toEqual(true);
  });
});
