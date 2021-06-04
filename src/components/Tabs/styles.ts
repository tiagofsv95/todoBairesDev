import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TabContainer = styled.div``;

export const TabList = styled.ul`
  display: flex;
  list-style-type: none;
`;

export const TabListItem = styled.li`
  display: block;
  padding: 10px;
  text-decoration: none;
  text-transform: capitalize;
  border-bottom: 2px solid transparent;
  position: relative;
  margin-bottom: 0;
`;

export const TabNavLink = styled(Link)`
  color: white;
  text-decoration: none;
`;
