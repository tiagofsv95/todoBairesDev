import styled from 'styled-components';

export const HeaderDiv = styled.div`
  border-bottom: 1px solid;
  border-color: ${props => props.theme.colors.primaryText};
  overflow-x: auto;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 321px) {
    max-width: 25rem;
  }
  margin: 0 auto;
`;

export const HeaderButton = styled.button`
  margin-right: 0.5rem;
  border: 0;
  background: ${props => props.theme.colors.backgroud};
  color: ${props => props.theme.colors.primaryText};
`;
