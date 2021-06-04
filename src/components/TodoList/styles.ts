import styled from 'styled-components';

export const TodoListContainer = styled.div``;

export const TodoListComponent = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

export const TodoListComponentItens = styled.li`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const TodoListCheckbox = styled.input`
  height: 1rem;
  width: 1rem;
  margin-right: 0.5rem;
`;

export const TodoListContent = styled.span``;

export const TodoListRemoveButton = styled.button`
  margin-left: 0.5rem;
  border: none;
  background-color: transparent;
  color: #ffffff;
  height: 1.5rem;
  height: 1.5rem;
`;
