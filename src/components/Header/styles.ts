import styled from 'styled-components';

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  overflow-x: auto;
`;

export const HeaderButton = styled.button`
  margin-right: 0.5rem;
  border: 0;
  background: ${props => props.theme.colors.backgroud};
`;
