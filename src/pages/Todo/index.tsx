import React, { useCallback, useState } from 'react';
import { uuid } from 'uuidv4';
import Layout from '../../components/Layout';
import TodoList from '../../components/TodoList';
import TodoContainer from './styles';

interface TodoProps {
  id: string;
  content: string;
  complete: boolean;
}

const Todo: React.FC = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todoList, setTodoList] = useState<TodoProps[]>([] as TodoProps[]);

  const addTodo = useCallback(() => {
    const newTudoList = todoList;
    if (newTodo && newTudoList) {
      setTodoList([
        ...newTudoList,
        { id: uuid(), content: newTodo, complete: false },
      ]);
      setNewTodo(``);
    }
  }, [newTodo, todoList]);

  const addTodoOnEnter = useCallback(
    e => {
      if (e.key === 'Enter') {
        addTodo();
      }
    },
    [addTodo],
  );

  const updateInput = useCallback(input => {
    setNewTodo(input);
  }, []);

  return (
    <Layout>
      <TodoContainer>
        <h1>TODO PAGE</h1>
        <form>
          <input
            placeholder="New an intem..."
            onChange={e => updateInput(e.target.value)}
            onKeyPress={addTodoOnEnter}
            value={newTodo}
          />
          <button type="button" onClick={addTodo}>
            Add todo
          </button>
        </form>
        {/* <ul>
          {todoList
            ? todoList.map(item => <li key={item.id}>{item.content}</li>)
            : null}
        </ul> */}
        <TodoList todoList={todoList} />
      </TodoContainer>
    </Layout>
  );
};

export default Todo;
