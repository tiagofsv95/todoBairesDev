import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { AppDispatch } from '../../store';
import { removeTodo, toggleTodo } from '../../store/todo';
import {
  TodoListContainer,
  TodoListComponent,
  TodoListComponentItens,
  TodoListComponentItensRight,
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
      <TodoListComponent data-testid="todo-list-ul">
        {todoList
          ? todoList.map(item => (
              <TodoListComponentItens key={item.id}>
                <TodoListComponentItensRight>
                  <TodoListCheckbox
                    data-testid={`todo-list-checkbox-${item.id}`}
                    type="checkbox"
                    id="scales"
                    name="scales"
                    checked={item.complete}
                    onChange={() => handleToggleTodo(item.id)}
                  />
                  <TodoListContent id={item.id} isChecked={item.complete}>
                    {item.content}
                  </TodoListContent>
                </TodoListComponentItensRight>
                <TodoListRemoveButton
                  data-testid={`todo-list-button-remove-${item.id}`}
                  isChecked={item.complete}
                  onClick={() => handleRemoveTodo(item.id)}
                >
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
