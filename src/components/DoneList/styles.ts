import styled from 'styled-components';

export const DoneListContainer = styled.div``;

export const DoneListComponent = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  min-width: 20rem;
  max-width: 25rem;
`;

export const DoneListComponentItens = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const DoneListComponentItensRight = styled.div`
  display: flex;
  align-items: center;
`;

export const DoneListRevert = styled.button`
  margin-right: 0.5rem;
  border: none;
  background-color: transparent;
  color: ${props => props.theme.colors.primaryText};
  height: 1.5rem;
  height: 1.5rem;
`;

export const DoneListContent = styled.span`
  color: ${props => props.theme.colors.primaryText};
`;

export const DoneListRemoveButton = styled.button`
  margin-left: 0.5rem;
  border: none;
  background-color: transparent;
  color: ${props => props.theme.colors.primaryText};
  height: 1.5rem;
  height: 1.5rem;
`;
