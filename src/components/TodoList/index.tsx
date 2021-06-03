import React from 'react';
import {
  TodoListContainer,
  TodoListComponent,
  TodoListComponentItens,
  TodoListCheckbox,
} from './styles';

interface TodoItemProps {
  id: string;
  content: string;
  complete: boolean;
}

interface TodoProps {
  todoList: TodoItemProps[];
}

const TodoList: React.FC<TodoProps> = ({ todoList }: TodoProps) => {
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
                />
                {item.content}
              </TodoListComponentItens>
            ))
          : null}
      </TodoListComponent>
    </TodoListContainer>
  );
};

export default TodoList;
