import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { addTodo } from '../../store/todo';
import {
  TodoFormContainer,
  TodoFormComponent,
  TodoFormInput,
  TodoFormAddButton,
} from './styles';

const TodoForm: React.FC = () => {
  const [newTodo, setNewTodo] = useState('');

  const dispatch = useDispatch<AppDispatch>();

  const handleAddTodo = useCallback(() => {
    if (newTodo) {
      dispatch(addTodo(newTodo));
      setNewTodo(``);
    }
  }, [newTodo, dispatch]);

  const handleAddTodoOnEnter = useCallback(
    e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleAddTodo();
      }
    },
    [handleAddTodo],
  );

  const updateInput = useCallback(input => {
    setNewTodo(input);
  }, []);

  return (
    <TodoFormContainer>
      <h1>TODO PAGE</h1>
      <TodoFormComponent>
        <TodoFormInput
          placeholder="New an intem..."
          onChange={e => updateInput(e.target.value)}
          onKeyPress={handleAddTodoOnEnter}
          value={newTodo}
        />
        <TodoFormAddButton type="button" onClick={handleAddTodo}>
          Add todo
        </TodoFormAddButton>
      </TodoFormComponent>
    </TodoFormContainer>
  );
};

export default TodoForm;
