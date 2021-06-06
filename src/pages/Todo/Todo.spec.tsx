import {
  render,
  waitFor,
  RenderResult,
  fireEvent,
  getByText,
} from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '../../store';
import App from '../../App';

const renderApp = (): RenderResult =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

describe('Tests for Todo Page', () => {
  it('Should be able to add new task click on buttton', async () => {
    const { getByTestId } = renderApp();

    const newTask = 'Teste new task';

    const inputNode = await waitFor(() => getByTestId('todo-form-input'));
    fireEvent.change(inputNode, { target: { value: newTask } });
    expect(inputNode.value).toEqual(newTask);

    const buttonNode = await waitFor(() => getByTestId('todo-form-button'));
    fireEvent.click(buttonNode);

    const todoListNode = await waitFor(() => getByTestId('todo-list-ul'));

    const todoListElementNode = await waitFor(() =>
      getByText(todoListNode, newTask),
    );
    expect(todoListElementNode).toBeDefined();
  });

  it('Should be able to add new task click on enter', async () => {
    const { getByTestId } = renderApp();

    const newTask = 'Teste new task on Enter';

    const inputNode = await waitFor(() => getByTestId('todo-form-input'));
    fireEvent.change(inputNode, { target: { value: newTask } });
    expect(inputNode.value).toEqual(newTask);
    fireEvent.keyPress(inputNode, { key: 'Enter', code: 13, charCode: 13 });

    const todoListNode = await waitFor(() => getByTestId('todo-list-ul'));

    const todoListElementNode = await waitFor(() =>
      getByText(todoListNode, newTask),
    );
    expect(todoListElementNode).toBeDefined();
  });

  it('Should be able to toogle task to done', async () => {
    const { getByTestId } = renderApp();

    const newTask = 'Teste new task on Enter';

    const inputNode = await waitFor(() => getByTestId('todo-form-input'));
    fireEvent.change(inputNode, { target: { value: newTask } });
    expect(inputNode.value).toEqual(newTask);
    fireEvent.keyPress(inputNode, { key: 'Enter', code: 'Enter' });

    const todoListNode = await waitFor(() => getByTestId('todo-list-ul'));

    const todoListElementNode = await waitFor(() =>
      getByText(todoListNode, newTask),
    );

    const itemId = todoListElementNode.id;

    const todoListCheckboxItemNode = await waitFor(() =>
      getByTestId(`todo-list-checkbox-${itemId}`),
    );
    fireEvent.click(todoListCheckboxItemNode);
    expect(todoListCheckboxItemNode.checked).toEqual(true);
  });

  it('Should be able to remove a task', async () => {
    const { getByTestId } = renderApp();

    const newTask = 'Teste new task';

    const inputNode = await waitFor(() => getByTestId('todo-form-input'));
    fireEvent.change(inputNode, { target: { value: newTask } });
    expect(inputNode.value).toEqual('Teste new task');
    fireEvent.keyPress(inputNode, { key: 'Enter', code: 'Enter' });

    const todoListNode = await waitFor(() => getByTestId('todo-list-ul'));

    const todoListElementNode = await waitFor(() =>
      getByText(todoListNode, newTask),
    );

    const itemId = todoListElementNode.id;

    const todoListRemoveButtonNode = await waitFor(() =>
      getByTestId(`todo-list-button-remove-${itemId}`),
    );
    fireEvent.click(todoListRemoveButtonNode);
  });
});
