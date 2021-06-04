import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Layout from '../../components/Layout';
import DoneList from '../../components/DoneList';
import { DoneContainer, DoneTitle } from './styles';

const Done: React.FC = () => {
  const todoList = useSelector((state: RootState) =>
    state.todos.filter(todo => {
      return todo.complete === true ? todo : null;
    }),
  );

  return (
    <Layout>
      <DoneContainer>
        <DoneTitle>DONE PAGE</DoneTitle>
        <DoneList doneList={todoList} />
      </DoneContainer>
    </Layout>
  );
};

export default Done;
