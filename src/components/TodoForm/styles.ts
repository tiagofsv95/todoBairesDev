import styled from 'styled-components';

export const TodoFormContainer = styled.div`
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const TodoFormTitle = styled.h1`
  color: ${props => props.theme.colors.primaryText};
`;

export const TodoFormComponent = styled.form`
  @media (max-width: 320px) {
    text-align: center;
  }
`;

export const TodoFormInput = styled.input`
  border: none;
  border-bottom: 1px solid;
  color: ${props => props.theme.colors.primaryText};
  background-color: transparent;
  padding: 0.25rem;
`;

export const TodoFormAddButton = styled.button`
  padding: 0.25rem 2rem;
  margin-left: 1.5rem;
  border-radius: 0.25rem;
  border-color: transparent;
  background-color: green;
  color: #ffffff;
  @media (max-width: 320px) {
    margin-top: 1rem;
    width: 80%;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;
