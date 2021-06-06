import styled from 'styled-components';

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid;
  border-color: ${props => props.theme.colors.primaryText};
  overflow-x: auto;
`;

export const HeaderButton = styled.button`
  margin-right: 0.5rem;
  border: 0;
  background: ${props => props.theme.colors.backgroud};
  color: ${props => props.theme.colors.primaryText};
`;
