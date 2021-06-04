import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { AppDispatch } from '../../store';
import { removeTodo, toggleTodo } from '../../store/todo';
import {
  TodoListContainer,
  TodoListComponent,
  TodoListComponentItens,
  TodoListCheckbox,
  TodoListContent,
  TodoListRemoveButton,
} from './styles';
import { TodoProps } from '../../interfaces/todo';

interface TodoListProps {
  todoList: TodoProps[];
}

const TodoList: React.FC<TodoListProps> = ({ todoList }: TodoListProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleToggleTodo = useCallback(
    (id: string) => {
      dispatch(toggleTodo(id));
    },
    [dispatch],
  );

  const handleRemoveTodo = useCallback(
    (id: string) => {
      dispatch(removeTodo(id));
    },
    [dispatch],
  );

  return (
    <TodoListContainer>
      <TodoListComponent>
        {todoList
          ? todoList.map(item => (
              <TodoListComponentItens key={item.id}>
                <TodoListCheckbox
                  type="checkbox"
                  id="scales"
                  name="scales"
                  checked={item.complete}
                  onChange={() => handleToggleTodo(item.id)}
                />
                <TodoListContent>{item.content}</TodoListContent>
                <TodoListRemoveButton onClick={() => handleRemoveTodo(item.id)}>
                  <FaTrash />
                </TodoListRemoveButton>
              </TodoListComponentItens>
            ))
          : null}
      </TodoListComponent>
    </TodoListContainer>
  );
};

export default TodoList;
