import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Layout from '../../components/Layout';
import TodoList from '../../components/TodoList';
import TodoForm from '../../components/TodoForm';
import TodoContainer from './styles';

const Todo: React.FC = () => {
  const todoList = useSelector((state: RootState) => state);

  return (
    <Layout>
      <TodoContainer>
        <TodoForm />
        <TodoList todoList={todoList.todos} />
      </TodoContainer>
    </Layout>
  );
};

export default Todo;
