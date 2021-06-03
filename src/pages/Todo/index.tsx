import React, { useCallback, useState } from 'react';
import { uuid } from 'uuidv4';
import Layout from '../../components/Layout';
// import TodoList from '../../components/TodoList';
import TodoContainer from './styles';

interface todoProps {
  id: string;
  content: string;
}

const Todo: React.FC = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todoList, setTodoList] = useState<todoProps[]>([] as todoProps[]);

  const addTodo = useCallback(() => {
    const newTudoList = todoList;
    if (newTodo && newTudoList) {
      setTodoList([...newTudoList, { id: uuid(), content: newTodo }]);
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
        <input
          placeholder="New an intem..."
          onChange={e => updateInput(e.target.value)}
          onKeyPress={addTodoOnEnter}
          value={newTodo}
        />
        <button type="button" onClick={addTodo}>
          Add todo
        </button>
        <ul>
          {todoList
            ? todoList.map(item => <li key={item.id}>{item.content}</li>)
            : null}
        </ul>
        {/* <TodoList tudoList={todoList} /> */}
      </TodoContainer>
    </Layout>
  );
};

export default Todo;
