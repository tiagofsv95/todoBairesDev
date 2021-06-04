import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { GrRefresh } from 'react-icons/gr';
import { AppDispatch } from '../../store';
import { removeTodo, toggleTodo } from '../../store/todo';
import {
  DoneListContainer,
  DoneListComponent,
  DoneListComponentItens,
  DoneListRevert,
  DoneListContent,
  DoneListRemoveButton,
} from './styles';
import { TodoProps } from '../../interfaces/todo';

interface DoneListProps {
  doneList: TodoProps[];
}

const DoneList: React.FC<DoneListProps> = ({ doneList }: DoneListProps) => {
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
    <DoneListContainer>
      <DoneListComponent>
        {doneList
          ? doneList.map(item => (
              <DoneListComponentItens key={item.id}>
                <DoneListRevert onClick={() => handleToggleTodo(item.id)}>
                  <GrRefresh />
                </DoneListRevert>
                <DoneListContent>{item.content}</DoneListContent>
                <DoneListRemoveButton onClick={() => handleRemoveTodo(item.id)}>
                  <FaTrash />
                </DoneListRemoveButton>
              </DoneListComponentItens>
            ))
          : null}
      </DoneListComponent>
    </DoneListContainer>
  );
};

export default DoneList;
