import styled, { css } from 'styled-components';

interface IsCheckedProps {
  isChecked: boolean;
}

export const TodoListContainer = styled.div``;

export const TodoListComponent = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  min-width: 20rem;
  max-width: 25rem;
`;

export const TodoListComponentItens = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const TodoListComponentItensRight = styled.div`
  display: flex;
  align-items: center;
`;

export const TodoListCheckbox = styled.input`
  margin-right: 0.5rem;
`;

export const TodoListContent = styled.span<IsCheckedProps>`
  ${props =>
    props.isChecked &&
    css`
      opacity: 0.33;
      text-decoration: line-through;
    `}
`;

export const TodoListRemoveButton = styled.button<IsCheckedProps>`
  margin-left: 0.5rem;
  border: none;
  background-color: transparent;
  color: #ffffff;
  height: 1.5rem;
  height: 1.5rem;

  ${props =>
    props.isChecked &&
    css`
      opacity: 0.33;
    `}
`;
